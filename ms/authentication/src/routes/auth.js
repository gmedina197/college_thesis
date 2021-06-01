const routes = require("express").Router();

const AuthenticationController = require("../app/controllers/AuthenticationController")

routes.post("", AuthenticationController.auth)

module.exports = routes;
