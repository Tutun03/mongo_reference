const mongoose = require('mongoose');
const connectDb= async(req,res)=>{
    try{
        const connect= await mongoose.connect("mongodb://localhost:27017/db");
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }

};

module.exports=connectDb;