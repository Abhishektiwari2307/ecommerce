const express=require('express')
const router=express.Router();
const userController=require('../controllers/userController')
const multer=require('multer')
const upload=multer({dest:'uploads/'})

// router.post('/post',userController.addUser);
router.get('/get',userController.getUser);
router.post('/add',userController.addUser);
router.patch('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);
router.post('/login',userController.loginUser)
module.exports=router;

router.post('/upload',upload.single('myfile'),(req,res)=>
{
res.send(req.file)
});
