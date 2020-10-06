const router = require("express").Router();
const TodoModel = require("../models/TodoModel");

router.get("/GetTodo", async (req, resp) => {
  try {
    const allTodo = await TodoModel.find();
    resp.status(200).json({ Task: allTodo });
  } catch (error) {
    resp.status(500).json({ error: "not processing" });
    console.log(error);
  }
});

router.get("/Get1Todo/:id", async (req, resp) => {
  try {
    const byId = req.params.id;
    const oneTodo = await TodoModel.findById(byId);

    if (oneTodo) {
      resp.status(200).json({
        data: oneTodo,
      });
    } else {
      resp.status(404).json({ error: "not found" });
    }
  } catch (error) {
    resp.status(500).json({ error: "not processing" });
    console.log(error);
  }
});

router.put("/PutTodo/:id", async (req, resp) => {
  const byId = req.params.id;
  const Nitem = req.body.todoItem;
  const NDateItem = req.body.date;
  const NLocalItem = req.body.local;
  try {
    const NTask = await TodoModel.updateOne(
      { _id: byId },
      { todoItem: Nitem, local: NLocalItem }
    );

    if (NTask) {
      resp.json({ data: NTask });
    } else {
      resp.send("Failed to update");
    }
  } catch (error) {
    console.log(error);
    resp.send("ID Not found");
  }
});

router.delete("/Delete1Todo/:id", async (req, resp) => {
  try {
    const byId = req.params.id;
    const oneTodo = await TodoModel.deleteOne({ _id: byId });

    if (oneTodo) {
      resp.send("Item Deleted");
    } else {
      resp.status(404).json({ error: "not found" });
    }
  } catch (error) {
    resp.status(404).json({ error: "not found" });
  }
});

router.post("/AddTodo", async (req, resp) => {
  try {
    const item = req.body.todoItem;
    const DateItem = req.body.date;
    const LocalItem = req.body.local;
    const todo = TodoModel({
      todoItem: item,
      date: DateItem,
      local: LocalItem,
    });
    const SavetoDB = await todo.save();

    resp.status(200).json({
      Task: SavetoDB.todoItem,
      WrittenOn: SavetoDB.date,
      Location: SavetoDB.local,
    });
  } catch (error) {
    resp.status(500).json({ error: "not processing" });
    console.log(error);
  }
});

module.exports = router;
