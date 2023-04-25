/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-center items-center gap-8 py-3 shadow-lg text-2xl font-bold">
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default:')}>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default:')}>About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default:')}>Contact</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default:')}>Policy</NavLink>
        </nav>
    );
}

export default Navbar;
