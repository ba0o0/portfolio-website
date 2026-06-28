const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Contact', contactSchema);