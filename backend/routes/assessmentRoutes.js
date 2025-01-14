const express = require('express');
const { calculateScores } = require('../controllers/assessmentController');

const router = express.Router();

router.post('/submit', calculateScores);

module.exports = router;