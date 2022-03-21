
const mongoose = require("mongoose");

const InstructorSchema = mongoose.Schema({
    UserId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    }
},
{

    timestamps : true,
    versionKey : false,
});


const Instructor1 = mongoose.model("instructor", InstructorSchema);

module.exports = Instructor1;