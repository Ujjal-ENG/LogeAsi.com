/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../components/layouts/Spinner';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({
        user: null,
        token: ''
    });
    const registerUser = async (user) => {
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', user);
            if (res.data.success) {
                toast.success(`${user.name} Successfully Registered!!`);
            } else {
                toast.error(res.data.message);
            }
            setIsLoading(false);
            setUserInfo(user);
        } catch (error) {
            toast.error(error);
        }
    };

    const loggedInUser = async (user) => {
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login', user);

            if (res.data && res.data.success) {
                localStorage.setItem('auths', JSON.stringify(res.data));
                setUserInfo({
                    ...userInfo,
                    user: res.data.user,
                    token: res.data.token
                });
                toast.success('Successfully LoggedIn!!');
                navigate(location.state || '/');
                setIsLoading(false);
            } else {
                toast.error(res.data.message);
                navigate('/login');
            }
            setIsLoading(false);
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    };

    const forgotPassword = async (user) => {
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/forgot-password', user);

            if (res.data && res.data.success) {
                toast.success('Successfully ForgotPassword!!');
                setIsLoading(false);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
            setIsLoading(false);
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    };

    const logoutUser = async () => {
        try {
            localStorage.clear();
            setIsLoggedIn(false);
            setUserInfo({
                ...userInfo,
                user: null,
                token: ''
            });
            toast.success('You Logged out Successfully!!');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const data = localStorage.getItem('auths');
        if (data) {
            const parseData = JSON.parse(data);

            setUserInfo((prevState) => ({
                ...prevState,
                user: parseData.user,
                token: parseData.token
            }));
        }
    }, []);

    if (loading) {
        return <Spinner />;
    }
    const auths = {
        registerUser,
        loggedInUser,
        logoutUser,
        isLoggedIn,
        userInfo,
        forgotPassword
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
