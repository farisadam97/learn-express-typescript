const Todo = require("../Model/TodoModel");
const moment = require("moment");
const addTodo = async (req, res) => {
  if (!req.body.description) {
    res.status(400).send({
      message: "Description needs to be filled!",
    });
  } else {
    const date = new Date(req.body.deadline);
    const dateIsValid = date instanceof Date && isFinite(date.getTime());
    if (dateIsValid) {
      const newTodo = await Todo.create({
        description: req.body.description,
        deadline: date,
      });
      res.status(201).send({
        message: "To do created!",
      });
    } else {
      res.status(400).send({
        message: "Deadline is not a date",
      });
    }
  }
};

const getTodos = async (req, res) => {
  const sortBy = await req.body.sortBy;
  const sortType = (await req.body.sortType) ? req.body.sortType : null;
  let allTodos;
  // const sort = JSON.parse(`{${sortBy} : ${sortType}} `);
  if (sortBy && sortType) {
    console.log("sort", sortBy, sortType);
    allTodos = await Todo.find().sort({
      [sortBy]: sortType,
    });
  } else {
    allTodos = await Todo.find();
    console.log("not sort");
  }
  res.status(200).send({
    message: "SUCCESS",
    data: allTodos,
  });
};

module.exports = { addTodo, getTodos };
