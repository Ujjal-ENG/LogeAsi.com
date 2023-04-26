/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
    return (
        <div>
            <h1 className="text-3xl font-bold py-4">Customer Dashboard</h1>
            <div className="btn-group btn-group-vertical w-full">
                <NavLink to="/dashboard/user/profile" className="btn  btn-outline">
                    Profile
                </NavLink>
                <NavLink to="/dashboard/user/orders" className="btn  btn-outline ">
                    Orders
                </NavLink>
            </div>
        </div>
    );
}

export default UserMenu;
