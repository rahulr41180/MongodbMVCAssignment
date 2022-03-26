
const express = require("express");

const router = express.Router();

const Submission1 = require("../models/submission.model");

const Student1 = require("../models/student.model");

const Evaluation1 = require("../models/evaluation.model");

router.get("", async(req,res) =>
{
    try
    {
        const Submission = await Submission1.find()
        .populate({path : "EvaluationId", select : {date_of_evaluation : 1}})
        .lean().exec();

        return res.status(200).send({Submission : Submission});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

router.post("", async(req,res) =>
{
    try
    {
        const User = await Student1.create(req.body);

        return res.status(201).send({User : User});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;