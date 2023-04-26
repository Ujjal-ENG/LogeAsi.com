/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../components/layouts/Spinner';
import { AuthContext } from '../context/AuthProvider';

function PrivateRoutes({ children }) {
    const { userInfo } = useContext(AuthContext);
    const [ok, setOK] = useState(false);
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('http://localhost:8080/api/v1/auth/user-auth', {
                headers: {
                    Authorization: userInfo?.token
                }
            });
            if (res.data.ok) {
                setOK(true);
            } else {
                setOK(false);
            }
        };
        if (userInfo?.token) authCheck();
    }, [userInfo?.token]);
    return ok ? children : <Spinner />;
}

export default PrivateRoutes;
