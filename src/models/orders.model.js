const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    dish_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dishes",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "carts",
      required: true,
    },
    datetime: { type: Date, default: new Date() },
    status: { type: String, default: "ordered accepted" },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: false,
  }
);

module.exports = mongoose.model("orders", orderSchema);
