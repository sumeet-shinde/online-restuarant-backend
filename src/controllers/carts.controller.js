const express = require("express");

const Carts = require("../models/carts.model");

const router = express.Router();

router.post("/addDishCart", async (req, res) => {
  try {
    let cart = await Carts.create(req.body);
    res.status(202).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.patch("/cartDishQuantity/:id", async (req, res) => {
  try {
    let cart = await Carts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(202).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/getCarts/:id", async (req, res) => {
  try {
    let cart = await Carts.find({ user_id: req.params.id, order_status: false })
      .lean()
      .exec();
    res.status(202).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.patch("/updateCart/:id", async (req, res) => {
  try {
    let cart = await Carts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(202).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.delete("/deleteCart/:id", async (req, res) => {
  try {
    let cart = await Carts.findByIdAndDelete(req.params.id).lean().exec();
    res.status(202).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
