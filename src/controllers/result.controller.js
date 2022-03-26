
const express = require("express");

const router = express.Router();

const Result1 = require("../models/result.model");

const Submission1 = require("../models/submission.model");

router.get("", async(req,res) =>
{
    try
    {
        const Result = await Result1.find()
        .sort({Marks : -1})
        .populate({path : "EvaluationId", select : {date_of_evaluation : 1}})
        .lean().exec();

        return res.status(200).send({Result : Result});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

module.exports = router;