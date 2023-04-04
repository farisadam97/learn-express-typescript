const { Router } = require("express");
const todoController = require("../Controller/TodoController");
const todoRouter = Router();

todoRouter.route("/").get(todoController.getTodos);
todoRouter.route("/add").post(todoController.addTodo);
todoRouter.route("/:id").put(todoController.updateTodos);
todoRouter.route("/:id").delete(todoController.deleteTodo);

module.exports = todoRouter;
