/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Spinner() {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((ps) => --ps);
        }, 1000);
        count === 0 && navigate('/login');
        return () => clearInterval(interval);
    }, [count, navigate]);
    return (
        <div className="flex flex-col space-y-8 h-screen justify-center items-center">
            <h1 className="text-center text-2xl font-bold">Redirecting to you in {count} second</h1>
            <progress className="progress w-56" />
        </div>
    );
}

export default Spinner;
