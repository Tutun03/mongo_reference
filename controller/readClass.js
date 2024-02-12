const Class = require("../model/classmodel");

const readClassf = (req, res) => {
    Class.find({})
        .exec()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json({"error": err});
        });
};
module.exports = {readClassf};