const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://martinlubowa:jesus147852@cluster0.s6launr.mongodb.net/shop?retryWrites=true&w=majority"
).then(()=>console.log(" DBConnection Successful!"))
 .catch((err)=>{
    console.log(err)
 });

app.listen(5000, ()=>{
    console.log("Backend server is running!");
})