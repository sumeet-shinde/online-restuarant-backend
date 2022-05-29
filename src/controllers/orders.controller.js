const express = require("express");

const Orders = require("../models/orders.model");

const router = express.Router();

router.post("/addOrders", async (req, res) => {
  try {
    let order = await Orders.create(req.body);
    res.status(202).send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/getOrders/:id", async (req, res) => {
  try {
    let order = await Orders.find({ user_id: req.params.id }).lean().exec();
    res.status(202).send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
