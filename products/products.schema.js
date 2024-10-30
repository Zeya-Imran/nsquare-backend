import { model, Schema } from "mongoose";

const prodcutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
      uniqie: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    isBestSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    isRecommended: {
      type: Boolean,
      required: true,
      default: false,
    },
    isLive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = model("Product", prodcutSchema);

export default Product;
