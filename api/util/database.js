const Sequelize = require("sequelize");

const sequelize = new Sequelize("new-schema", "root", "Sathyarjun@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
