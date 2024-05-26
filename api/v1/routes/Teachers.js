const router=require('express').Router();

const {Add_Teacher, GetAll_Teachers}=require('../controllers/Teachers');
router.post("/addTeacher",Add_Teacher);
router.get('/allTeachers',GetAll_Teachers);

module.exports=router;