const express = require("express");

const controller = require("../controllers/controller");

const route = express.Router();

route.get("/", controller.getData);

route.post("/", controller.postData);

route.get("/:id", controller.getById);

route.put("/:id", controller.updateById);

route.delete("/:id", controller.deleteById);

module.exports = route;
