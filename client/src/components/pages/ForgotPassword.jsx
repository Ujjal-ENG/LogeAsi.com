/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

function ForgotPassword() {
    useTitle('Forgot Password');
    const [showPass, setShowPass] = useState(false);
    const { forgotPassword } = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: '',
        answer: ''
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        forgotPassword(user);
    };
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5">
                            <div className="h-14 w-14 bg-blue-100 rounded-full flex flex-shrink-0 justify-center items-center text-blue-500 text-2xl font-mono">?</div>
                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 className="leading-relaxed">Forgot Password?</h2>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">Enter your email address and security question to reset your password.</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <label className="font-semibold text-gray-600 block pb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 h-10 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 focus:bg-white"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label className="font-semibold text-gray-600 block pb-2">New Password</label>

                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        placeholder="#*&$fdjhfd"
                                        id="password"
                                        required
                                        className="w-full bg-gray-100 h-10 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 focus:bg-white"
                                        value={user.password}
                                        onChange={handleChange}
                                    />

                                    {showPass ? (
                                        <AiFillEye className="absolute right-4 bottom-2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} />
                                    ) : (
                                        <AiFillEyeInvisible className="absolute right-4 bottom-2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} />
                                    )}
                                </div>
                                <div className="relative">
                                    <label className="font-semibold text-gray-600 block pb-2">Security Question</label>
                                    <input
                                        type="text"
                                        id="answer"
                                        name="answer"
                                        value={user.answer}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 h-10 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 focus:bg-white"
                                        placeholder="What is your full name?"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="pt-4 flex items-center space-x-4">
                                <button type="submit" className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
