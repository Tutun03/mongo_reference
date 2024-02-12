const Class = require("../model/classmodel");

const createClassf = (req, res) => {
    console.log(req.body);
    let cl = new Class();
    cl.name = req.body.name;
    cl.students = [];
    
    cl.save()
        .then(savedClass => {
            res.json(savedClass);
        })
        .catch(err => {
            res.json({"error": err});
        });
};


module.exports = {createClassf};

