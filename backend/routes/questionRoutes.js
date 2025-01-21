const express = require('express');
const { firstQuestion, nextQuestion } = require('../controllers/questionController');
const router = express.Router();

router.post('/start', firstQuestion);
router.post('/next', nextQuestion);

module.exports = router;
