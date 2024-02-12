const express=require('express');
const router=express.Router();
const {createstudentf}=require('../controller/createStudent')
const readstudentf=require('../controller/readstudent');
const preadstudenf=require('../controller/preadstudent');
router.route('/').post(createstudentf);
router.route('/studentget/get').get(readstudentf);
// router.route('/:id').get(preadstudenf)

module.exports=router;