import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "User";

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "email must be unique"],
    },
    userpwd: String,
    phone: String,
    salt: String,
    name: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    image: String,
    createdAt: Date,
    updateAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "users");
