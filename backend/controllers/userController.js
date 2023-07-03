const express=require('express');
require('../config');
const emp=require('../Model/userModel');
const encryptpass=require('../passwordencrypt/password');
const jwt=require('jsonwebtoken');
const multer=require('multer');

exports.addUser = async (req, res) => {
    //res.send("hello ")
    // console.log(req.body)
const user=new emp({
    
    name:req.body.name,
    // Salary:req.body.Salary,
    // Email:req.body.mail,
    // Password:await encryptpass(req.body.password)
    email:req.body.email,
    number:req.body.number
})

user.save().then((data)=>{
    res.send({
        status:200,
        message:"Data Inserted",
        result:data
    })

}).catch((err)=>{
    console.log(err)

})
}

exports.getUser=async (req,res)=>
{

    await emp.find().then(data=>{
      

        res.send({
            status:200,
            msg:"Data fetched Successfully",
            res:data

        })
       
    }).catch(err=>{
        console.log(err)
    })
}

exports.updateUser=async (req,res)=>
{
    const id=req.params.id
    await emp.findByIdAndUpdate(id,req.body)
    .then(data =>
    res.send(
        {
            result:data,
            message:"updated"
        }
    )).catch((err)=>console.log(err))
}
exports.deleteUser= async(req,res)=>
{
    await emp.findByIdAndDelete(req.params.id)
    .then((data)=>
    res.send(
        {
            result:data,
            message:"deleted"
        }
    ))
    
}
exports.loginUser=async (req,res)=>{
await emp.findOne({Email:req.body.Email})
.then((newuser)=>
{
    if(newuser.Password===req.body.Password)
    {
        const token=jwt.sign({id:newuser._id},"my name is abhishek tiwari",{expiresIn:'1h'})
        res.send(token)
    }
    else{
        res.send("enter correct password")
    }
})
.catch(()=>
res.send("enter valid email")
)

}
