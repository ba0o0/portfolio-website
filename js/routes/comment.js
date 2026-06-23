const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

router.post('/', async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    
    console.log ("Name: ", name, ", Message:", message);

    try{
        const newComment = new Comment({name, message});
        await newComment.save();

        res.json({message: 'Thank You for leaving a comment!'});

    }catch(error){
        console.error(error);
        res.json({message: 'An Error has occured.'});
    }

});


module.exports = router;