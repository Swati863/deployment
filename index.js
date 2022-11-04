const express = require("express")
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 6000;

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/about",(req,res)=>{
    res.send("Hello about ")
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})