/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import { ImCross, ImMenu } from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Navbar() {
    const { userInfo, logoutUser } = useContext(AuthContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <nav className="py-3 shadow-lg text-2xl font-bold">
            <div className="navbar bg-base-100 flex justify-between items-center relative">
                <div className="hidden sm:flex">
                    <Link to="/" className="text-xl">
                        LogeAsi.com
                    </Link>
                </div>
                <div className="sm:hidden block text-5xl">
                    {menuIsOpen ? <ImCross onClick={() => setMenuIsOpen(!menuIsOpen)} className="text-red-600" /> : <ImMenu onClick={() => setMenuIsOpen(!menuIsOpen)} />}
                </div>
                <div className="gap-8 hidden sm:flex">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                        Home
                    </NavLink>
                    <NavLink to="/category" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                        Category
                    </NavLink>
                </div>

                {/* mobile menu */}
                <div className={`sm:hidden block absolute duration-250 ease-out transition-all ${menuIsOpen ? 'top-20 left-0 right-0' : '-top-96'}`}>
                    <ul className="menu bg-base-100 w-full rounded-box  shadow-2xl space-y-5 text-center py-8">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                            Home
                        </NavLink>
                        <NavLink to="/category" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                            Category
                        </NavLink>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {userInfo.user ? (
                        <div className="dropdown dropdown-end relative">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <p className="text-orange-600 font-bold ring-2 rounded-full p-1">
                                    {' '}
                                    {userInfo.user.name}
                                    <span className="badge absolute -top-5 -left-20">{userInfo.user.role === 0 ? 'Customer' : 'Admin'}</span>
                                </p>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">Profile</a>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <Link to="/login" className="btn" onClick={() => logoutUser()}>
                                    Logout
                                </Link>
                            </ul>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                                Register
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
