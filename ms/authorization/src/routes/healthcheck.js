const routes = require("express").Router();

routes.get("/health", (req, res) => res.json({ OK: true }));

module.exports = routes;
