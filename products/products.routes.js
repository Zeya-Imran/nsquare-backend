import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "./products.controller.js";

//create router
const router = express.Router();

//create product
router.post("/", createProduct);

//get all product
router.get("/", getAllProduct);

//get single product
router.get("/:id", getProductById);

//update product
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

export default router;
