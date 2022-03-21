
const mongoose = require("mongoose");

const SubmissionSchema = mongoose.Schema({
    EvaluationId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "evaluation",
        required : true,
    },
    StudentId : 
    {
        
        type : mongoose.Schema.Types.ObjectId,
        ref : "student",
        required : true,
    },
},
{
    timestamps : true,
    versionKey : false,
});

const Submission1 = mongoose.model("submission", SubmissionSchema);

module.exports = Submission1;