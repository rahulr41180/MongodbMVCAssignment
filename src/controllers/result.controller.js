
const express = require("express");

const router = express.Router();

const Result1 = require("../models/result.model");

router.get("", async(req,res) =>
{
    try
    {
        const Result = await Result1.find().lean().exec();

        return res.status(200).send({Result : Result});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
});

module.exports = router;