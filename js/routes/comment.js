const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

router.post('/', async (req, res) => {
    const nameInput = req.body.name;
    const messageInput = req.body.message;
    
    console.log ("Name: ", nameInput, ", Message:" ,messageInput);

    try{
        const newComment = new Comment({nameInput, messageInput});
        await newComment.save();

        res.json({message: 'Thank You for leaving a comment.'});

    }catch(error){
        console.error(error);
        res.json({message: 'An Error has occured.'});
    }

});

module.exports = router;