require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const path = require('path')
const dbPath = path.resolve(__dirname, 'database.db')

module.exports = {
  db_url: process.env.DB_URL,
  dialect: process.env.DB_DIALECT || "sqlite",
  storage: dbPath,
  operatorsAliases: false,
  logging: console.log,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true
  }
};
