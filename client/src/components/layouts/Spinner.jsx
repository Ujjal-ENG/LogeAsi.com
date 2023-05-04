/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Spinner() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login', {
            state: location.pathname
        });
    }, [location.pathname, navigate]);
    return (
        <div className="flex flex-col space-y-8 h-screen justify-center items-center">
            <progress className="progress w-56" />
        </div>
    );
}

export default Spinner;
