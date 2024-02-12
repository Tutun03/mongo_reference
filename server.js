const express= require('express');
const  connectDb= require('./config/db');
const app = express();
connectDb();
app.use(express.json());

app.use('/main/class',require('./route/classR'));
app.use('/main/student',require("./route/studentR"));

app.listen(3000,()=>{
    console.log("Server is running");
});