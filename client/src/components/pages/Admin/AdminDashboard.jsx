/* eslint-disable react/jsx-indent */
import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import AdminMenu from '../../layouts/AdminMenu';

function AdminDashboard() {
    useTitle('Admin Dashboard');
    return (
        <div className="grid grid-cols-12 justify-items-center  mx-auto">
            <div className="col-span-3 w-full px-8">
                <AdminMenu />
            </div>
            <div className="col-span-9 pt-10">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;
