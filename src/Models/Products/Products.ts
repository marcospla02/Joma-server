import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
});

export default mongoose.model("Product", productSchema);
