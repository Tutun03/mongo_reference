const connectDb=require('../config/db.js');
const Student=require('../model/studentmodel.js');
const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const  classSchema= new Schema({
    name:{
        type:String,
        unique:true,
    },
   students:[{
    type:'ObjectId',
    ref:'Student'
   }]
})

const Class= mongoose.model('Class',classSchema);
module.exports=Class;