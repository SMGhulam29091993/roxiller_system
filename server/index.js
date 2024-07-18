const express = require("express");
require("dotenv").config();
require("colors");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));


app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT} in ${process.env.NODE_ENV.trim()} mode`.bgYellow);
})