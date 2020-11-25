"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var controller_1 = require("./../controllers/controller");
exports.router = express_1.Router();
exports.router.post("/recommend", controller_1.recommend);
// router.get("/todos", getTodos)
// router.post("/add-todo", addTodo)
// router.put("/edit-todo/:id", updateTodo)
// router.delete("/delete-todo/:id", deleteTodo)
exports["default"] = exports.router;
