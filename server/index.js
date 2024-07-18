const express = require("express");
require("dotenv").config();
require("colors");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;

const db = require("./config/mongoose");
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));

app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT} in ${process.env.NODE_ENV.trim()} mode`.bgYellow);
})