
require('../config')
const express=require('express')
const mongoose=require('mongoose')
const dbschema=mongoose.Schema(
    {
        name:String,
        // Salary:Number,
        // Email:String,
        // Password:String
        email:String,
        number:Number
    }
)

const employee=mongoose.model('employees',dbschema)
module.exports=employee