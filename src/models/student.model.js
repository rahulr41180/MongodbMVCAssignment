
const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    roll_id : {type : String, required : true},
    current_batch : {type : String, required : true},
    UserId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    },
},
{
    timestamps : true,
    versionKey : false,
})

const Student1 = mongoose.model("student",StudentSchema);

module.exports = Student1;