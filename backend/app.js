require('./config')
const express=require('express')
const userRoutes=require('./routes/userRoute')
const cors=require('cors')
const app=express();
const Port=process.env.Port||8000;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
    next();
  });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users',userRoutes);

app.use(cors())

app.listen(Port)


// const emp1={
//     Name:"rahul",
//     Salary:10000,
//     Designation:"engineer",
//     Skills:["react","express","node"]
// }
// const emp2={
//     Name:"aman",
//     Salary:17000,
//     Designation:" software engineer",
//     Skills:["angular","express","mongo"]
// }
// const emp3={
//     Name:"ankit",
//     Salary:30000,
//     Designation:"devloper",
//     Skills:["react","express","node","mongo","formik"]
// }
// const emp4={
//     Name:"bhavit",
//     Salary:20000,
//     Designation:"backend engineer",
//     Skills:["express","node","mysql"]
// }
// dbmodel.insertMany({Name:"abhishek",Salary:15000,Phone:8890294246})
// dbmodel.insertMany([emp1,emp2,emp3,emp4]);

