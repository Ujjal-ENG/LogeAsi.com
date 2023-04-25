/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-center items-center gap-8 py-3 shadow-lg text-2xl font-bold">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                Contact
            </NavLink>
            <NavLink to="/policy" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                Policy
            </NavLink>
        </nav>
    );
}

export default Navbar;
