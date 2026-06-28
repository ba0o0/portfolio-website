const express = require('express');
const router = express.Router();
const validator = require('validator');

const Contact = require('../models/Contact');   //schema

router.post('/', async (req, res) => {
    const email = req.body.email;
    console.log('Email recieved:' , email);
    
    try{
        if(!validator.isEmail(email)){
            return res.json({message: "Please enter a valid email."})
        }

        const newConact = new Contact({email});
        await newConact.save();

        res.json({message: 'Thanks for reaching out! I\'ll get back to you soon.'});
    } catch (error){
        console.error(error);
        if (error.code === 11000){
            return res.status(500).json({message: "This email has already been submitted."})
        }
        res.status(500).json({message: "Error something went wrong."})
    }
});


module.exports = router;