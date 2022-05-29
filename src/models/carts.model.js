const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
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
    quantity: {
      type: Number,
      default: 1,
    },
    total_price: {
      type: Number,
      required: true,
    },
    order_status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: false,
  }
);

module.exports = mongoose.model("carts", cartSchema);
