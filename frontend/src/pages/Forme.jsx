import React, { useState } from "react";

const FormWithScore = () => {
    const [formData, setFormData] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
    });

    const [score, setScore] = useState(null);

    const questions = [
        {
            text: "How often do you feel stressed?",
            options: [
                { text: "Never", value: 0 },
                { text: "Rarely", value: 1 },
                { text: "Sometimes", value: 2 },
                { text: "Often", value: 3 },
            ],
            name: "question1",
        },
        {
            text: "How often do you feel tired?",
            options: [
                { text: "Never", value: 0 },
                { text: "Rarely", value: 1 },
                { text: "Sometimes", value: 2 },
                { text: "Often", value: 3 },
            ],
            name: "question2",
        },
        {
            text: "How often do you feel happy?",
            options: [
                { text: "Never", value: 0 },
                { text: "Rarely", value: 1 },
                { text: "Sometimes", value: 2 },
                { text: "Often", value: 3 },
            ],
            name: "question3",
        },
        {
            text: "How often do you exercise?",
            options: [
                { text: "Never", value: 0 },
                { text: "Rarely", value: 1 },
                { text: "Sometimes", value: 2 },
                { text: "Often", value: 3 },
            ],
            name: "question4",
        },
        {
            text: "How often do you eat healthy meals?",
            options: [
                { text: "Never", value: 0 },
                { text: "Rarely", value: 1 },
                { text: "Sometimes", value: 2 },
                { text: "Often", value: 3 },
            ],
            name: "question5",
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalScore = Object.values(formData).reduce((acc, curr) => acc + parseInt(curr || 0), 0);
        setScore(totalScore);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Questionnaire</h2>

                {questions.map((question, index) => (
                    <div key={index} className="mb-6">
                        <p className="text-gray-600 font-medium mb-2">{question.text}</p>
                        {question.options.map((option, idx) => (
                            <div key={idx} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id={`${question.name}-${idx}`}
                                    name={question.name}
                                    value={option.value}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor={`${question.name}-${idx}`} className="text-gray-600">
                                    {option.text}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>

                {score !== null && (
                    <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
                        <p className="text-lg font-bold">Your Score: {score}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormWithScore;
