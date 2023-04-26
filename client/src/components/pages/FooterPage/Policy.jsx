/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Policy() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                    <p className="mt-4 text-gray-500">
                        At LogeAsi.com, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information about you when you use our website or contact us.
                    </p>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Information We Collect</h3>
                    <p className="mt-4 text-gray-500">
                        We collect information about you when you visit our website, sign up for our newsletter, or contact us directly. This information may include your name, email address, phone
                        number, and other details you provide to us.
                    </p>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">How We Use Information</h3>
                    <p className="mt-4 text-gray-500">
                        We use the information we collect to improve our website and services, send you newsletters and other updates, respond to your inquiries, and communicate with you about our
                        business.
                    </p>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Information We Share</h3>
                    <p className="mt-4 text-gray-500">We do not share your information with third parties except as necessary to provide our services or as required by law.</p>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Cookies and Tracking</h3>
                    <p className="mt-4 text-gray-500">
                        We use cookies and other tracking technologies to improve your experience on our website, analyze our traffic, and personalize our content. You can control cookies through your
                        browser settings.
                    </p>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Contact Us</h3>
                    <p className="mt-4 text-gray-500">If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <HiOutlineMail className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500">
                                <a href="mailto:contact@logeasi.com">contact@logeasi.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <FaPhoneAlt className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500">
                                <a href="tel:+1-555-555-5555">+1 (555555-5555)</a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <FaRegEnvelope className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500">
                                123 Main St, Suite 500
                                <br />
                                Anytown, USA 12345
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policy;
