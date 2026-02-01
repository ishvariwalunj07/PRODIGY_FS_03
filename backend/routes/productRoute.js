import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add", adminAuth,
  upload.fields([
    { name: "p_img1", maxCount: 1 },
    { name: "p_img2_1", maxCount: 1 },
    { name: "p_img2_2", maxCount: 1 },
    { name: "p_img2_3", maxCount: 1 }
  ]),
  addProduct
);

productRouter.post("/remove",adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
