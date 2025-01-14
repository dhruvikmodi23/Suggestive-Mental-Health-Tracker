const calculateScores = (req, res) => {
    const { gad7Responses, phq9Responses } = req.body;

    const calculateScore = (responses) => responses.reduce((sum, score) => sum + score, 0);

    const gad7Score = calculateScore(gad7Responses);
    const phq9Score = calculateScore(phq9Responses);

    const interpretGAD7 = gad7Score <= 4 ? "Minimal Anxiety"
        : gad7Score <= 9 ? "Mild Anxiety"
        : gad7Score <= 14 ? "Moderate Anxiety"
        : "Severe Anxiety";

    const interpretPHQ9 = phq9Score <= 4 ? "Minimal Depression"
        : phq9Score <= 9 ? "Mild Depression"
        : phq9Score <= 14 ? "Moderate Depression"
        : phq9Score <= 19 ? "Moderately Severe"
        : "Severe Depression";

    res.json({ gad7Score, interpretGAD7, phq9Score, interpretPHQ9 });
};

module.exports = { calculateScores };
