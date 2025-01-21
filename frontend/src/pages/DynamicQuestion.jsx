import React, { useState, useEffect } from 'react';
import { fetchFirstQuestion, fetchNextQuestion } from '../services/questionService';

const DynamicQuestion = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch the first question on component mount
        const loadFirstQuestion = async () => {
            try {
                setLoading(true);
                const question = await fetchFirstQuestion();
                setCurrentQuestion(question);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadFirstQuestion();
    }, []);

    const handleAnswer = async (selectedOption) => {
        if (!currentQuestion) return;
        try {
            setLoading(true);
            const nextQuestion = await fetchNextQuestion(currentQuestion.questionId, selectedOption);
            setCurrentQuestion(nextQuestion);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {currentQuestion && (
                <div>
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.options.map(option => (
                        <button
                            key={option.text}
                            onClick={() => handleAnswer(option.text)}
                            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DynamicQuestion;
