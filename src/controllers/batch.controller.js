
const express = require("express");

const router = express.Router();

const Student1 = require("../models/student.model");

const Batch1 = require("../models/batch.model");

router.get("", async(req,res) =>
{
    try
    {
        const Batch = await Student1.find().lean().exec();

        return res.status(200).send({Batch : Batch});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;