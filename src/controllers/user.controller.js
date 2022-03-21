
const express = require("express");

const User1 = require("../models/user.model");

const router = express.Router();

router.get("", async(req,res) =>
{
    try
    {
        const User = await User1.find().lean().exec();

        return res.status(200).send({User : User});
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
        const User = await User1.create(req.body);

        return res.status(201).send({User : User});
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
        const User = await User1.findById(req.params.id).lean().exec();

        return res.status(200).send({User : User});
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
        const User = await User1.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();

        return res.status(200).send({User : User});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.delete("/:id", async(req,res) =>
{
    try
    {
        const User = await User1.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send({User : User});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})
module.exports = router;