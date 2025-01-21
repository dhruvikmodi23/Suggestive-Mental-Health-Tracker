const express = require('express');

const Question = require("../models/questionModel");

// Get the first question
exports.firstQuestion = async (req, res) => {
  try {
    const firstQuestion = await Question.findOne({ questionId: 'q1' }); // Replace 'q1' with your starting question ID
    if (!firstQuestion) return res.status(404).json({ error: 'No questions found.' });
    res.json(firstQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get the next question based on user answer
exports.nextQuestion= async (req, res) => {
  const { currentQuestionId, selectedOption } = req.body;
  try {
    const currentQuestion = await Question.findOne({ questionId: currentQuestionId });
    if (!currentQuestion) return res.status(404).json({ error: 'Question not found.' });

    const nextQuestionId = currentQuestion.options.find(opt => opt.text === selectedOption)?.next;
    if (!nextQuestionId) return res.status(404).json({ error: 'Next question not found.' });

    const nextQuestion = await Question.findOne({ questionId: nextQuestionId });
    if (!nextQuestion) return res.status(404).json({ error: 'Next question does not exist.' });

    res.json(nextQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
