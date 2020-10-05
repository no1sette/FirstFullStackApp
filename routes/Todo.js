const router = require("express").Router();
const TodoModel = require("../models/TodoModel");

router.get("/GetTodo", async (req, resp) => {
  try {
    const allTodo = await TodoModel.find();
    resp.status(200).json({ Task: allTodo });
  } catch (error) {
    console.log(error);
  }
});

router.post("/AddTodo", async (req, resp) => {
  try {
    const item = req.body.todoItem;
    const todo = TodoModel({ todoItem: item });
    const SavetoDB = await todo.save();

    resp.status(200).json({
      Task: SavetoDB.todoItem,
      WrittenOn: SavetoDB.date,
      Location: SavetoDB.local,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
