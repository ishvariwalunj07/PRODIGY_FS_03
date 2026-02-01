import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../api";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 100;

  // =========================
  // STATE
  // =========================
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  // ✅ FIXED TOKEN STATE
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();

  // 🔍 DEBUG (remove later if you want)
  console.log("ShopContext token:", token);

  // =========================
  // FETCH ALL PRODUCTS
  // =========================
  const getProductData = async () => {
    try {
      const res = await API.get("/product/list");
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load products");
    }
  };

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    setCartItems(cartData);

    // ❌ Skip backend if not logged in
    if (!token) return;

    try {
      await API.post(
        "/cart/add",
        { itemId, size },
        { headers: { token } }
      );
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  // =========================
  // GET USER CART
  // =========================
  const getUserCart = async (authToken) => {
    try {
      const res = await API.post(
        "/cart/get",
        {},
        { headers: { token: authToken } }
      );
      if (res.data.success) {
        setCartItems(res.data.cartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // CART COUNT
  // =========================
  const getCartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        count += cartItems[item][size];
      }
    }
    return count;
  };

  // =========================
  // CART TOTAL AMOUNT
  // =========================
  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;

      for (const size in cartItems[itemId]) {
        total += product.price * cartItems[itemId][size];
      }
    }
    return total;
  };

  // =========================
  // UPDATE CART QUANTITY
  // =========================
  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (!token) return;

    try {
      await API.post(
        "/cart/update",
        { itemId, size, quantity },
        { headers: { token } }
      );
    } catch (error) {
      toast.error("Failed to update cart");
    }
  };

  // =========================
  // LOAD PRODUCTS ONCE
  // =========================
  useEffect(() => {
    getProductData();
  }, []);

  // =========================
  // LOAD TOKEN & CART
  // =========================
  useEffect(() => {
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  // =========================
  // CONTEXT VALUE
  // =========================
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    navigate,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
