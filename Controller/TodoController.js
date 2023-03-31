const todoModel = require("../Model/TodoModel");
const moment = require("moment");
const addTodo = async (req, res) => {
  if (!req.body.description) {
    res.status(400).send({
      message: "Description needs to be filled!",
    });
  } else {
    const newTodo = await todoModel.create({
      description: req.body.description,
      //  deadline: moment(req.body.deadline).format("DD/MM/YYYY"),
    });
    res.status(201).send({
      message: "To do created!",
    });
  }
};

module.exports = { addTodo };
