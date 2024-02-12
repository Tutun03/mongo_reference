const Class = require("../model/classmodel");
const Student = require('../model/studentmodel.js');

const preadstudentf = (req, res) => {
    Student.findOne({_id: req.params.id})
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json({"error": err});
        });
};

module.exports = preadstudentf;
