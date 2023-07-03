const express=require('express')
const router=express.Router();

router.get('/registration',(req,res)=>
{
    res.send("registration page")
})

// router.post('/signup',(req,res)=>
// {
//     res.send("registration page")
// })
router.get('/login',(req,res)=>
{
    res.send("login page")
})
router.get('/profile',(req,res)=>
{
    res.send("profile page")
})
router.get('/editprofile',(req,res)=>
{
    res.send("editprofile page")
})
router.get('/changepassword',(req,res)=>
{
    res.send("changepassword page")
})
router.get('/forgetpassword',(req,res)=>
{
    res.send("forgetpassword page")
})

module.exports=router;