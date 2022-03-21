
const mongoose = require("mongoose");

const BatchSchema = mongoose.Schema({
    Batch_name : {type : String, required : true},
    StudentId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "student",
        required : true,
    }
},
{
    timestamps : true,
    versionKey : false,
});

const Batch1 = mongoose.model("batch", BatchSchema);

module.exports = Batch1;