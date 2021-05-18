const dotenv = require("dotenv");

if (!process.env.DB_URL) {
  dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
  });
}

module.exports = {
  url: process.env.DB_URL,
  dialect: process.env.DB_DIALECT || "sqlite",
  logging: console.log,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
