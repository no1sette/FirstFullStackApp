const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todoItem: { type: String, require: true },
  date: { type: Date, default: Date.now },
  local: { type: String, default: "Atlanta" },
});

module.exports = mongoose.model("Todo", todoSchema);
