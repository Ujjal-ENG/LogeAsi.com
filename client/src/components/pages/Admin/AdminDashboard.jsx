/* eslint-disable react/jsx-indent */
import React from 'react';
import AdminMenu from '../../layouts/AdminMenu';

function AdminDashboard() {
    return (
        <div className="grid grid-cols-12 justify-items-center  mx-auto">
            <div className="col-span-3 w-full px-8">
                <AdminMenu />
            </div>
            <div className="bg-black col-span-9">hell</div>
        </div>
    );
}

export default AdminDashboard;
