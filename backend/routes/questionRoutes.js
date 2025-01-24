const express = require('express');
const { firstQuestion, nextQuestion } = require('../controllers/questionController');
const {addQuestion} = require('../controllers/addQuestionController');
const router = express.Router();

router.get('/start', firstQuestion);
router.post('/next', nextQuestion);
router.post('/add',addQuestion)

module.exports = router;
