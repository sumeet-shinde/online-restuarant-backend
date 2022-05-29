const express = require("express");

const Dishes = require("../models/dishes.model");

const router = express.Router();

router.post("/addDishes", async (req, res) => {
  try {
    let dish = await Dishes.create(req.body);
    res.status(202).send(dish);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/getDishes", async (req, res) => {
  try {
    let dish = await Dishes.find().lean().exec();
    res.status(202).send(dish);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/getDishesByCategory/:category", async (req, res) => {
  try {
    let dish = await Dishes.find({ category: req.params.category })
      .lean()
      .exec();
    res.status(202).send(dish);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/getDishesByLocation/:location", async (req, res) => {
  try {
    let dish = await Dishes.find({ restaurant_location: req.params.location })
      .lean()
      .exec();
    res.status(202).send(dish);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
