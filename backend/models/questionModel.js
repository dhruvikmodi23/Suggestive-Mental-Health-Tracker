const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  next: { type: String, required: false }
});

const questionSchema = new mongoose.Schema({
  questionId: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['single-choice', 'multi-choice', 'text', 'rating'] 
  },
  options: {
    type: [optionSchema],
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'Options must contain at least one option'
    }
  },
  required: { type: Boolean, default: true }
},{timestamps:true});

module.exports = mongoose.model('Question', questionSchema);
