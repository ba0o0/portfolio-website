const {checkProfanity, Filter} = require('glin-profanity');
const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');   // schema

const commentFilter = new Filter({
            detectLeetspeak: true,
            languages: ['english']
});

const MAX_NAME = 50;
const MAX_MESSAGE = 500;

router.post('/', async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    
    console.log ("Name: ", name, ", Message:", message);

    // Checks name and message are strings
    if (typeof name !== 'string' || typeof message !== 'string'){
        return res.status(400).json({message: 'Invalid input.'})
    }

        const cleanName = name.trim();
    const cleanMessage = message.trim();

    // Presence + length
    if (!cleanName || !cleanMessage) {
        return res.status(400).json({ message: 'Name and message are required.' });
    }
    if (cleanName.length > MAX_NAME || cleanMessage.length > MAX_MESSAGE) {
        return res.status(400).json({
            message: `Name must be under ${MAX_NAME} and message under ${MAX_MESSAGE} characters.`
        });
    }

    // Reject HTML-looking input (see trade-off below)
    if (/[<>]/.test(cleanName) || /[<>]/.test(cleanMessage)) {
        return res.status(400).json({ message: 'Please don\'t use < or > characters.' });
    }

    try{

        //checkProfanity
        const profanStatus = checkProfanity(`${cleanName} ${cleanMessage}`, commentFilter);
        if(profanStatus.containsProfanity){
            res.json({message:"WHAT DID I SAY, SHAME ON YOU: Your message was detect as inappropriate!"});
            return;
        }
        const newComment = new Comment({cleanName, cleanMessage});
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