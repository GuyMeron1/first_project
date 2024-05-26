const router=require('express').Router();

const {Add_Student,Student_Login}=require('../controllers/Students');
router.post("/addStudent",Add_Student);
router.post('/login',Student_Login);

module.exports=router;