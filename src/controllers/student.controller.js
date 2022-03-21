
const express = require("express");

const router = express.Router();

const User1 = require("../models/user.model");

// const Evaluation1 = require("../models/evaluation.model");

const Student1 = require("../models/student.model");

router.get("", async(req,res) =>
{
    try
    {
        const Student = await Student1.find()
        .populate({path : "UserId"})
        .lean().exec();

        return res.status(200).send({Student : Student});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.post("", async(req,res) =>
{
    try
    {
        const Student = await Student1.create(req.body);

        return res.status(201).send({Student : Student});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.get("/:id", async(req,res) =>
{
    try
    {
        const Student = await Student1.findById(req.params.id)
        .populate({path : "UserId"})
        .lean().exec();

        return res.status(200).send({Student : Student});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.patch("/:id", async(req,res) =>
{
    try
    {
        const Student = await Student1.findByIdAndUpdate(req.params.id, req.body, {new : true})
        
        .populate({path : "UserId"})
        .lean().exec();

        return res.status(200).send({Student : Student});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;