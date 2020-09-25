const express = require("express");
const app = express();
const todo = require("./routes/Todo")
const connectdb = require("./config/connectdb");
const connect = require("./config/connectdb");

connectdb();

app.use("/API/V1", todo);
// app.get("/API", (req,resp)=>{resp.send("Hello World")});


const port = process.env.PORT || 3030

app.listen(port, console.log(`listenning on port ${port}`));