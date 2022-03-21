
const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema({
    marks : {type : Number, required : true},
    EvaluationId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "evaluation",
        required : true,
    },
},
{
    timestamps : true,
    versionKey : false,
});

const Result1 = mongoose.model("results", ResultSchema);

module.exports = Result1;