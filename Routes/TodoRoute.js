const { Router } = require("express");
const todoController = require("../Controller/TodoController");
const todoRouter = Router();

todoRouter.route("/todo/add").post(todoController.addTodo);
