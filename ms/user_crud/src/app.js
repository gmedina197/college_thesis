require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
      this.express.use("/users/", require("./routes/users"));
      /*this.express.use("/cars/", require("./routes/cars"));
      this.express.use("", require("./routes/auth")); */
  }
}

module.exports = new AppController().express;
