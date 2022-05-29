const express = require("express");

const connect = require("./config/db");

const { register, login } = require("./controllers/auth.controller");

const CartController = require("./controllers/carts.controller");

const OrderController = require("./controllers/orders.controller");

const DishController = require("./controllers/dishes.controller");

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/dishes", DishController);

app.use("/orders", OrderController);

app.use("/carts", CartController);

app.listen(8080, (req, res) => {
  try {
    connect();
    console.log("listening on port 8080");
  } catch (error) {
    res.status(404).send(error.message);
  }
});
