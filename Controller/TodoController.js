const Todo = require("../Model/TodoModel");
const moment = require("moment");
const addTodo = async (req, res) => {
  const { description, deadline } = req.body;
  if (!description) {
    res.status(400).send({
      message: "Description needs to be filled!",
    });
  } else {
    try {
      const date = new Date(deadline);
      const today = new Date();
      const dateIsValid = date instanceof Date && isFinite(date.getTime());
      if (dateIsValid) {
        if (date < today) {
          return res.status(400).send({
            message: "Deadline must not before today's date!",
          });
        }

        if (description.length > 50) {
          return res.status(400).send({
            message: "Max length for description is 60 characters",
          });
        }

        const newTodo = await Todo.create({
          description: description,
          deadline: date,
        });
        return res.status(201).send({
          message: "To do created!",
        });
      } else {
        return res.status(400).send({
          message: "Deadline is not a date",
        });
      }
    } catch (error) {
      return res.status(400).send({
        message: error,
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

const updateTodos = async (req, res) => {
  const { id, description } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { description },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.status(200).send({
      message: "Todo updated",
      todo: todo,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addTodo, getTodos, updateTodos };
