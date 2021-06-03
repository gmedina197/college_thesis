const routes = require("express").Router();

const authMiddleware = require("../app/middleware/auth");

const CarController = require("../app/controllers/CarController");

routes.use(authMiddleware);

routes.post("/", CarController.save);

routes.get("/", CarController.list);

routes.get("/:carId", CarController.get);

routes.delete("/:carId", CarController.delete);

module.exports = routes;
