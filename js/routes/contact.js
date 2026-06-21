const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const email = req.body.email;
    console.log('Email recieved:' , email);
    
    try{
        const newConact = new Contact({email});
        await newConact.save();

        res.json({message: 'Thanks for reaching out! I\'ll get back to you soon.'});
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Error something went wrong."})
    }
});


module.exports = router;