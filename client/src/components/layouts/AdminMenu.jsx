/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminMenu() {
    return (
        <div>
            <h1 className="text-3xl font-bold py-4">Admin Panel</h1>
            <div className="btn-group btn-group-vertical w-full">
                <NavLink to="/dashboard/admin/create-category" className="btn  btn-outline">
                    Create Category
                </NavLink>
                <NavLink to="/dashboard/admin/create-product" className="btn  btn-outline ">
                    Create Product
                </NavLink>
                <NavLink to="/dashboard/admin/users" className="btn  btn-outline ">
                    Users
                </NavLink>
            </div>
        </div>
    );
}

export default AdminMenu;
