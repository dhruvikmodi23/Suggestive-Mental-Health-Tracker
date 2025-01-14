import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const calculateScore = (answers) => {
    return answers.reduce((total, score) => total + score, 0);
};

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const answers = location.state?.answers || [];
    const score = calculateScore(answers);

    const resultMessage =
        score <= 4
            ? "Minimal Anxiety/Depression"
            : score <= 9
                ? "Mild Anxiety/Depression"
                : score <= 14
                    ? "Moderate Anxiety/Depression"
                    : "Severe Anxiety/Depression";

    return (
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Results</h2>
            <p className="text-lg text-gray-700 mb-4">
                Your total score is: <span className="font-bold">{score}</span>
            </p>
            <p className="text-lg font-bold text-blue-500 mb-4">{resultMessage}</p>
            <button
                onClick={() => navigate("/questionnaire")}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Retake Questionnaire
            </button>
        </div>
    );
};

export default Result;
