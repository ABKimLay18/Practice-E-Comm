import { Schema, model } from "mongoose";
const ObjectID = Schema.Types.ObjectId;

const itemSchema = Schema({
  owner: {
    type: ObjectID,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

export default model("Item", itemSchema);
