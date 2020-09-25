const router = require("express").Router();

//app.get("/API", (req,resp)=>{resp.send("Hello World")});
router.get("/Todo", (req, resp) => {
  resp.send("todo URL");
});

module.exports = router;
