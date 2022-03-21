
const express = require("express");

const router = express.Router();

const Instructor1 = require("../models/instructor.model");

router.get("", async(req,res) =>
{
    try
    {
        const Instructor = await Instructor1.find().lean().exec();

        return res.status(200).send({Instructor : Instructor});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;