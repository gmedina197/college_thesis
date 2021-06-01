require("dotenv").config({
    path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev",
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
      this.express.use("/authenticate/", require("./routes/auth"));
    }
  }
  
  module.exports = new AppController().express;
  