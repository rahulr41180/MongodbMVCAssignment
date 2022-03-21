
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : false},
    gender : {type : String, required : false, enum : ["Male", "Female"], default : "Male"},
    dateOfBirth : {type : Date, required : false},
},
{
    versionKey : false,
    timestamps : true,
});

const User1 = mongoose.model("user",UserSchema);

module.exports = User1;