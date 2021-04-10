const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    Login: {
        type: String, 
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        required: true, 
        default: Date.now,
        expires: 43200
    }
}, {timestamps: true});

module.exports = mongoose.model('Tokens', tokenSchema);