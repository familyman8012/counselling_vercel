import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Comment";

const schema = new Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    content: String,
    value: Number,
    categoryId: Number,
    reviewTitle: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "comments");
