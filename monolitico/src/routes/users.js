const routes = require("express").Router();

const authMiddleware = require("../app/middleware/auth");

const UserController = require("../app/controllers/UserController");

routes.post("/", UserController.save);

routes.use(authMiddleware);

routes.get("/", UserController.list);

routes.get("/:userId", UserController.get);

routes.delete("/:userId", UserController.delete);

module.exports = routes;
