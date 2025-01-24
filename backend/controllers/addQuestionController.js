// Add a new question to the database

const Question=require("../models/questionModel");
exports.addQuestion =  async (req, res) => {
    const { questionId, question, type, options, required } = req.body;
  
    try {
      // Validate input
      if (!questionId || !question || !type || !options) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Check if questionId already exists
      const existingQuestion = await Question.findOne({ questionId });
      if (existingQuestion) {
        return res.status(400).json({ error: 'Question ID already exists' });
      }

  
      // Create a new question
      const newQuestion = await Question.create({
        questionId,
        question,
        type,
        options,
        required: required || true
      });
  
      //await newQuestion.save();
      res.status(201).json({ message: 'Question added successfully', question: newQuestion });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  