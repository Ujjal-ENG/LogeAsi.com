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

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Login() {
    const { loggedInUser, userInfo } = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        loggedInUser(user);
        navigate('/');
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input id="email" type="email" placeholder="email" value={user.email} required onChange={handleChange} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" id="password" required className="input input-bordered" value={user.password} onChange={handleChange} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div type="submit" className="form-control mt-6">
                            <button className="btn btn-success">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
