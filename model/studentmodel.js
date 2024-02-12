const connectDb=require('../config/db.js');
const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const  studentSchema= new Schema({
    name:{
        type:String,
        unique:true,
    },
    age:Number,
    subject:String
})

const Student= mongoose.model('Student',studentSchema);
module.exports=Student;