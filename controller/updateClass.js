const Class = require("../model/classmodel");
const Student = require('../model/studentmodel.js');

const updateClassf = async (req, res) => {
    try {
        const doc = await Class.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {students: req.body.studentId}}, // Assuming 'studentId' is the field you want to push
            {new: true}
        );
        res.json(doc);
    } catch (err) {
        res.json({"error": err});
    }
};

module.exports = {updateClassf};
