/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImCross, ImMenu } from 'react-icons/im';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/LoGeAsi.svg';
import { AuthContext } from '../../context/AuthProvider';
import { useCart } from '../../context/CartProvider';
import { SearchContext } from '../../context/SearchProvider';
import useCategory from '../../hooks/useCategory';

function Navbar() {
    const cartedItem = JSON.parse(localStorage.getItem('cartItem'));
    const [cart, setCart] = useCart([]);
    const categories = useCategory();
    const { setSearchResults, setIsLoading } = useContext(SearchContext);
    const { userInfo, logoutUser } = useContext(AuthContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchValue === '') return;
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product/search-product/${searchValue}`);
            if (data.success) {
                setSearchResults(data.result);
                navigate('/search');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            toast.error('Error occured while fetching the Search Results!!');
        }
    };
    const subTotal = cart ? cart.reduce((ps, cs) => ps + cs.quantity * cs.price, 0) : 0;

    return (
        <nav className="py-3 shadow-lg text-2xl font-bold">
            <div className="navbar bg-base-100 flex justify-between items-center relative">
                <div className="hidden sm:flex">
                    <Link to="/" className="text-xl">
                        <img src={Logo} alt="LogeAsi.com" className="bg-black h-14 w-24 scale-110" />
                    </Link>
                </div>
                <div className="sm:hidden block text-5xl">
                    {menuIsOpen ? <ImCross onClick={() => setMenuIsOpen(!menuIsOpen)} className="text-red-600" /> : <ImMenu onClick={() => setMenuIsOpen(!menuIsOpen)} />}
                </div>
                <div className="gap-8 hidden sm:flex">
                    <div>
                        <form onClick={handleSubmit} className="flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="input input-bordered input-primary w-full max-w-xs"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button type="submit" className="btn btn-success btn-md">
                                Search
                            </button>
                        </form>
                    </div>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default:')}>
                        Home
                    </NavLink>

                    <ul className="menu menu-horizontal bg-base-100">
                        <li tabIndex={0}>
                            <span>Category</span>
                            <ul className="bg-base-100 space-y-4 px-4 py-2">
                                {categories?.map((el, idx) => (
                                    <Link to={`/category/${el.slug}`} key={idx} className=" hover:bg-gray-300 hover:p-3">
                                        {el.name}
                                    </Link>
                                ))}
                            </ul>
                        </li>
                    </ul>
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
                                <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cart.length || 0} Items</span>
                                <span className="text-info">Subtotal: ${subTotal}</span>
                                <div className="card-actions">
                                    <Link to="/cart" className="btn btn-primary btn-block">
                                        View cart
                                    </Link>
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
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4">
                                <li>
                                    <Link to={`/dashboard/${userInfo.user.role === 0 ? 'user' : 'admin'}`}>Dashboard</Link>
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
