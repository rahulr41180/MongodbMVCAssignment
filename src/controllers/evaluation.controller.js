
const express = require("express");

const Evaluation1 = require("../models/evaluation.model");

// const Instructor1 = require("../models/instructor.model");

const Batch1 = require("../models/batch.model");

const router = express.Router();

router.get("", async(req,res) =>
{
    try
    {
        const Evaluation = await Evaluation1.find()
        .populate({path : "InstructorId", select : {firstName : 1}})
        .populate({path : "BatchId", select : {Batch_name : 1}})
        .lean().exec();

        return res.status(200).send({Evaluation : Evaluation});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

router.get("/:id", async(req,res) =>
{
    try
    {

        const Batch = await Evaluation1.findById(req.params.id)
        .populate({path : "InstructorId", select : {firstName : 1}})
        .populate({path : "BatchId", select : {StudentId : 1}})
        .lean()
        .exec();

        return res.status(200).send({Batch : Batch});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

module.exports = router;