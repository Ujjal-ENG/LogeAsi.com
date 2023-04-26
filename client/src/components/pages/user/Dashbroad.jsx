/* eslint-disable react/jsx-indent */
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from '../../layouts/UserMenu';

function Dashbroad() {
    return (
        <div className="grid grid-cols-12 justify-items-center">
            <div className="w-full px-4 col-span-3">
                <UserMenu />
            </div>
            <div className="w-full px-2 pt-10 col-span-9">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashbroad;
