import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    productimage: {
      type: String,
      trim: true,
      required: true
    },
    details: {
      type: String,
    },
    features: {
      type: String,
    },
    featureimage :{
      type: String,
      trim: true,
    },
    prameter :{
      type: String,
      trim: true,
    },
    type :{
      type: String,
      trim :true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", product);

export default Product;