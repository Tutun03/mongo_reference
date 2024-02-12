const express= require('express');
const router=express.Router();
const {createClassf}=require('../controller/createClass');
const {readClassf}=require('../controller/readClass');
const {updateClassf}=require('../controller/updateClass');


router.route('/').post(createClassf);
router.route('/classget/get').get(readClassf);
router.route('/:id').put(updateClassf);


module.exports=router;