const mongoose=require('mongoose');
const Teachers_Model = require('../models/Teachers');

module.exports = {

    Add_Teacher : async (req, res) => {
        console.log(req.body);
        const{Name,Age,Subjects,Email} = req.body;

        const new_Teacher = new Teachers_Model({
            _id:new mongoose.Types.ObjectId(),
            Name:Name,
            Age:Age,
            Subjects:Subjects,
            Email:Email
        })
        
        const result = await new_Teacher.save();
        console.log(result);

        return res.status(200).json(result);
    },

    GetAll_Teachers : async (req, res) => {
        const Teachers_Array = await Teachers_Model.find();
        console.log(Teachers_Array);
        return res.status(200).json({msg:Teachers_Array});
    },
};
