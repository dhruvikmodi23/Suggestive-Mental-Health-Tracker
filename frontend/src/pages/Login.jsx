import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            alert("Login successful!");
            navigate("/question");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid email or password.");
        }
    };

    return (
        <div className="flex w-full justify-center items-center min-h-screen  ">
            <form
                onSubmit={handleSubmit}
                className="bg-transparent shadow-md  bg-inherit rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md rounded-3xl"
            >
                <h2 className="text-2xl text-black font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Login
                    </button>
                    <Link
                        to="/forget-password"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <Link to="/register" className="text-sm text-blue-500 hover:text-blue-800">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
