/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/layouts/Spinner';
import { AuthContext } from '../context/AuthProvider';

function PrivateAdminRoute() {
    const { userInfo } = useContext(AuthContext);
    const [ok, setOK] = useState(false);
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('http://localhost:8080/api/v1/auth/admin-auth', {
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

    return ok ? <Outlet /> : <Spinner />;
}

export default PrivateAdminRoute;
