const Class = require("../model/classmodel");
const Student=require('../model/studentmodel.js');

const createstudentf=(req,res)=>{
    console.log(req.body);
    const student=new Student();
    student.name=req.body.name;
    student.age=req.body.age;
    student.subject=req.body.subject;
    student.save()
    .then(savedstudent => {
        res.json(savedstudent);
    })
    .catch(err => {
        res.json({"error": err});
    });

}

module.exports = {createstudentf};