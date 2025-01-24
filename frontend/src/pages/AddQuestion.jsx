import React, { useState } from 'react';

const AddQuestion = () => {
    const [formData, setFormData] = useState({
        questionId: '',
        question: '',
        type: 'single-choice',
        options: [{ text: '', next: '' }],
        required: true
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOptionChange = (index, field, value) => {
        const newOptions = [...formData.options];
        newOptions[index][field] = value;
        setFormData({ ...formData, options: newOptions });
    };

    const addOption = () => {
        setFormData({ ...formData, options: [...formData.options, { text: '', next: '' }] });
    };

    const removeOption = (index) => {
        const newOptions = formData.options.filter((_, i) => i !== index);
        setFormData({ ...formData, options: newOptions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/questions/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('Question added successfully!');
                setFormData({
                    questionId: '',
                    question: '',
                    type: 'single-choice',
                    options: [{ text: '', next: '' }],
                    required: true
                });
            } else {
                setMessage(data.error || 'Failed to add question');
            }
        } catch (err) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add a New Question</h2>
            {message && <p className="text-green-500">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Question ID</label>
                    <input
                        type="text"
                        name="questionId"
                        value={formData.questionId}
                        onChange={handleInputChange}
                        className="border rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Question Text</label>
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleInputChange}
                        className="border rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Question Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="border rounded px-4 py-2 w-full"
                    >
                        <option value="single-choice">Single Choice</option>
                        <option value="multi-choice">Multiple Choice</option>
                        <option value="text">Text</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Options</label>
                    {formData.options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                placeholder="Option text"
                                value={option.text}
                                onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
                                className="border rounded px-4 py-2 mr-2 flex-1"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Next question ID"
                                value={option.next}
                                onChange={(e) => handleOptionChange(index, 'next', e.target.value)}
                                className="border rounded px-4 py-2 mr-2 flex-1"
                            />
                            <button
                                type="button"
                                onClick={() => removeOption(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addOption}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Add Option
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Required?</label>
                    <input
                        type="checkbox"
                        name="required"
                        checked={formData.required}
                        onChange={(e) => setFormData({ ...formData, required: e.target.checked })}
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Add Question
                </button>
            </form>
        </div>
    );
};

export default AddQuestion;
