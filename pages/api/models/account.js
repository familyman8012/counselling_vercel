import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Account";

const schema = new Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "accounts");
