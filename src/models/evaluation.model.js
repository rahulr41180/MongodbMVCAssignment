
const mongoose = require("mongoose");

const EvaluationSchema = mongoose.Schema({
    date_of_evaluation : {type : Date, required : true},
    InstructorId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "instructor",
        required : true,
    },
    BatchId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "batch",
        required : true,
    }
},
{
    timestamps : true,
    versionKey : false,
})

const Evaluation1 = mongoose.model("evaluation", EvaluationSchema);

module.exports = Evaluation1;