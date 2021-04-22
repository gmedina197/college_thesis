const routes = require("express").Router();

const UserController = require("../app/controllers/UserController");

routes.post("/", UserController.save);

routes.get("/", UserController.list);

routes.get("/:userId", UserController.get);

routes.delete("/:userId", UserController.delete);

module.exports = routes;
