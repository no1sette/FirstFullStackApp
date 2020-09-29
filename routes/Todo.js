const router = require("express").Router();
const TodoModel = require("../models/TodoModel");

//app.get("/API", (req,resp)=>{resp.send("Hello World")});
router.get("/Todo", async (req, resp) => {
  try {
    const allTodo = await TodoModel.find();
    resp.json({ data: allTodo });
    // console.log(allTodo);
  } catch (error) {
    console.log(error);
  }
});

router.post("/AddTodo", async (req, resp) => {
  try {
    const jelly = req.body.action;
    const todo = TodoModel({ action: jelly });
    const SavetoDB = await todo.save();
    // console.log(SavetoDB);
    resp.json({ data: SavetoDB });
  } catch (error) {
    console.log("post failed");
  }
});

module.exports = router;
