import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    name: String,
  },
  { versionKey: false }
);

export default mongoose.model("Image", imageSchema);
