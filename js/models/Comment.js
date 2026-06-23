const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: String,
    message: String,
    timestamp:{type: Date, defaul: Date.now }
})

module.exports = mongoose.model('Comment', commentSchema);