import { Schema, model } from "mongoose";
const ObjectID = Schema.Types.ObjectId;

const cartSchema = Schema(
  {
    owner: { type: ObjectID, ref: "User", required: true },
    items: [
      {
        itmeId: {
          type: ObjectID,
          ref: "Item",
          required: true,
        },
        name: String,
        quantity: { type: Number, required: true, min: 1, default: 1 },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default model("Cart", cartSchema);
