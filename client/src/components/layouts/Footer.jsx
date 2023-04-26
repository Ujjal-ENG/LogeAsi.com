/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4 text-sm sm:text-2xl">
                <NavLink to="/about" className="link link-hover divide-black divide-x-4">
                    About us
                </NavLink>
                <div className="hidden sm:block divider divider-horizontal" />
                <NavLink to="/contact" className="link link-hover">
                    Contact Us
                </NavLink>
                <div className="hidden sm:block divider divider-horizontal " />
                <NavLink to="/policy" className="link link-hover">
                    Privacy Policy
                </NavLink>
            </div>

            <div>
                <p>
                    Copyright © 2023 - All right reserved by <span className="text-orange-500 font-bold">Ujjal Kumar Roy</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
