require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  url: process.env.DB_URL,
  dialect: process.env.DB_DIALECT || "sqlite",
  logging: console.log,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true
  }
};
