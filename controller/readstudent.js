
const Student=require('../model/studentmodel.js');

const readstudentf=(req,res)=>{
    Student.find({})
    .exec()
    .then(docs => {
        res.json(docs);
    })
    .catch(err => {
        res.json({"error": err});
    });
}

module.exports=readstudentf;