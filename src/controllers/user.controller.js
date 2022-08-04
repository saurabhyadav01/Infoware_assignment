const express = require('express');
const User= require("../models/user.model");
const router = express.Router();

router.get("",async(req,res)=>{
    try {
        let users= await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        let users= await User.findByIdAndDelete(res.param.id);
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.put("/:id",async(req,res)=>{
    try {
        let users= await User.findByIdAndUpdate({ name: req.body.name,mobile: req.body.mobile,photo: req.body.photo });
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


module.exports = router;