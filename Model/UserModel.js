const mongoose = require("mongoose");

const UserSchme = mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    maxLength: 50,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", UserSchme);
