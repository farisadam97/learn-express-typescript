const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  description: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  deadline: {
    type: mongoose.SchemaTypes.String,
  },
});
