import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Post";

const schema = new Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
    category: String,
    title: String,
    cont: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "posts");
