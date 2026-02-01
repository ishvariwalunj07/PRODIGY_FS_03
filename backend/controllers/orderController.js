import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Razorpay from "razorpay";

const currency = "INR";
const deliveryCharge = 100;

// ================= RAZORPAY INIT =================
let razorpayInstance = null;

if (
  process.env.RAZORPAY_KEY_ID &&
  process.env.RAZORPAY_KEY_SECRET
) {
  razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} else {
  console.warn("⚠️ Razorpay keys missing. Running in DEMO MODE.");
}

// ================= PLACE ORDER (COD) =================
const placeOrder = async (req, res) => {
  try {
    const userId = req.user; // ✅ FROM AUTH
    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // clear cart after order
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed (COD)" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================= PLACE ORDER (RAZORPAY) =================
const placeOrderRazorpay = async (req, res) => {
  try {
    const userId = req.user; // ✅ FROM AUTH
    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // ✅ DEMO MODE
    if (!razorpayInstance) {
      return res.json({
        success: true,
        demo: true,
        orderId: newOrder._id,
        message: "Payment Successful (Demo Mode)",
      });
    }

    // ✅ REAL RAZORPAY
    const options = {
      amount: amount * 100,
      currency,
      receipt: newOrder._id.toString(),
    };

    const order = await razorpayInstance.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================= VERIFY RAZORPAY =================
const verifyRazorpay = async (req, res) => {
  try {
    const userId = req.user; // ✅ FROM AUTH
    const { razorpay_order_id } = req.body;

    // ✅ DEMO MODE
    if (!razorpayInstance) {
      await orderModel.findByIdAndUpdate(razorpay_order_id, {
        payment: true,
      });

      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      return res.json({
        success: true,
        message: "Payment Verified (Demo Mode)",
      });
    }

    // ✅ REAL MODE
    const orderInfo = await razorpayInstance.orders.fetch(
      razorpay_order_id
    );

    if (orderInfo.status === "paid") {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
      });

      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      res.json({ success: true, message: "Payment Successful" });
    } else {
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================= ADMIN =================
const allOrders = async (req, res) => {
  const orders = await orderModel.find({});
  res.json({ success: true, orders });
};

const userOrders = async (req, res) => {
  const userId = req.user; // ✅ FROM AUTH
  const orders = await orderModel.find({ userId });
  res.json({ success: true, orders });
};

const updateStatus = async (req, res) => {
  const { orderId, status } = req.body;
  await orderModel.findByIdAndUpdate(orderId, { status });
  res.json({ success: true, message: "Status Updated" });
};

export {
  verifyRazorpay,
  placeOrder,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
