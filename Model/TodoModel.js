const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  description: {
    type: mongoose.SchemaTypes.String,
    maxLength: 50,
    required: true,
  },
  deadline: {
    type: mongoose.SchemaTypes.Date,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
