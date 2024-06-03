const mongoose=require('mongoose');
const Students_Model = require('../models/Students');
const bcrypt = require('bcrypt');

module.exports = {

    Add_Student : async (req,res) => {
        console.log(req.body);
        const { Name, Age, Grades, Password } = req.body;
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(Password, salt);
        console.log(hashedPassword);

        const new_Student = new Students_Model({
            _id: new mongoose.Types.ObjectId(),
            Name,Age,Grades,
            Password: hashedPassword 
        });
        const result = await new_Student.save();

        console.log(result);

        return res.status(200).json(result);

    } ,
    Student_Login: async (req, res) => {
        const { Name, Password } = req.body;
        const student = await Students_Model.findOne({ Name });
        console.log(student);
        console.log(Password);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        const passwordMatch = await bcrypt.compare(Password, student.Password);
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(Password, salt);
        console.log(hashedPassword);
        console.log(student.Password);
        if (passwordMatch) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    },
}