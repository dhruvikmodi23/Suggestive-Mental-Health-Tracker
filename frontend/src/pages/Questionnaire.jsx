import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        age: "",
        profession: "",
        problem: "",
    });
    const navigate = useNavigate();

    const professions = ["Student", "Engineer", "Doctor", "Artist", "Other"];
    const problems = ["Job", "Family", "Relationship", "Studies", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        navigate("/form");

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">User Form</h2>

                {/* Age Input */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-gray-600 font-medium mb-2">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your age"
                    />
                </div>

                {/* Profession Select */}
                <div className="mb-4">
                    <label htmlFor="profession" className="block text-gray-600 font-medium mb-2">
                        Profession
                    </label>
                    <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="" disabled>
                            Select your profession
                        </option>
                        {professions.map((profession, index) => (
                            <option key={index} value={profession}>
                                {profession}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Problems Select */}
                <div className="mb-4">
                    <label htmlFor="problem" className="block text-gray-600 font-medium mb-2">
                        What type of problem are you facing?
                    </label>
                    <select
                        id="problem"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="" disabled>
                            Select your problem
                        </option>
                        {problems.map((problem, index) => (
                            <option key={index} value={problem}>
                                {problem}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
