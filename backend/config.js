const express=require("express")
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)});