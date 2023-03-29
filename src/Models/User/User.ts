import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  cart: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId /* ref: "Product" */ },
      quantity: Number,
    },
  ],
  admin: { type: Boolean, default: false },
  picture: { type: String, default: "" },
});

export default mongoose.model("User", userSchema);
