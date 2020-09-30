require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const app = express();
const todo = require("./routes/Todo");
const connectdb = require("./config/connectdb");

//Configuration
app.use(express.json());
connectdb();

app.use("/API/V1", todo);

const port = process.env.PORT || 3030;

app.listen(port, console.log(`listenning on port ${port}`));
