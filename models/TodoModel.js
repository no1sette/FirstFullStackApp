const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todoItem: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
