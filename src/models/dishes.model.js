const mongoose = require("mongoose");

const DishesSchema = new mongoose.Schema(
  {
    dish_name: { type: String, required: true },
    dish_image: { type: String, required: true },
    restaurant_name: { type: String, required: true },
    restaurant_location: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    strict: false,
  }
);

module.exports = mongoose.model("dishes", DishesSchema);
