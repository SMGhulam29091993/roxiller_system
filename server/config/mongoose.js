const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error",console.error.bind(console,`Error in connecting with db`.bgRed));

db.once("open", ()=>{
    console.log("The conection with db is established.".bgGreen);
})

module.exports = db;