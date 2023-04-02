const { Router } = require("express");
const todoController = require("../Controller/TodoController");
const todoRouter = Router();

todoRouter.route("/").get(todoController.getTodos);
todoRouter.route("/add").post(todoController.addTodo);

module.exports = todoRouter;
