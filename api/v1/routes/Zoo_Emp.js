const router=require('express').Router();

const {getAllZoo, getZooByid, addAnimalToZoo, addEmployeeToZoo, LoginEmployee, RegisterEmployee, addZoo}=require('../controllers/Zoo_Emp');

router.get('/all',getAllZoo);
router.get('/:zooid',getZooByid);
router.post('/add_ani',addAnimalToZoo);
router.post('/add_emp',addEmployeeToZoo);
router.post('/register',RegisterEmployee);
router.post('/login',LoginEmployee);
router.post('/add_zoo',addZoo);


module.exports=router;