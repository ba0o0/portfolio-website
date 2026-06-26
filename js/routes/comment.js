const {checkProfanity, Filter} = require('glin-profanity');
const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');   // schema

const commentFilter = new Filter({
            detectLeetspeak: true,
            languages: ['english']
});

router.post('/', async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    
    console.log ("Name: ", name, ", Message:", message);

    try{
        const newComment = new Comment({name, message});

        //checkProfanity
        const profanStatus = checkProfanity(`${name} ${message}`, commentFilter);
        if(profanStatus.containsProfanity){
            res.json({message:"WHAT DID I SAY, SHAME ON YOU: Your message was detect as inappropriate!"});
            return;
        }

        await newComment.save();

        res.json({message: 'Thank You for leaving a comment!'});

    } catch(error){
        console.error(error);
        res.json({message: 'An Error has occured.'});
    }

});

router.get('/', async (req, res) => {
    try{
        const page = parseInt (req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        
        const comments = await Comment.find()
            .sort({timestamp: -1})
            .skip(skip)
            .limit(limit);

        const total = await Comment.countDocuments();
        const totalPages = Math.ceil(total/limit);

        res.json({comments, totalPages, currentPage: page});
    } catch(error){
        console.error('Error fetching comments:', error)
        res.status(500).json({message:'Error fetching comments.'});
    }
});

module.exports = router;