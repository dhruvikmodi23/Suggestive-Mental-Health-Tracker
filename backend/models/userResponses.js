const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
    gad7Responses: { type: [Number], required: true },
    phq9Responses: { type: [Number], required: true },
    submittedAt: { type: Date, default: Date.now },
},{ timestamps: true });

module.exports = mongoose.model('UserResponse', userResponseSchema);
