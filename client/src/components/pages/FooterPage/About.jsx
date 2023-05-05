/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

function About() {
    useTitle('About');
    return (
        <div className="bg-white flex justify-center items-center w-full">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Who We Are</h2>
                        <p className="mt-3 text-lg text-gray-500">
                            LogeAsi.com is a leading online retailer of high-quality products for customers in the United States and beyond. Our mission is to provide a convenient and reliable
                            shopping experience, with a focus on exceptional customer service and affordable prices.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="flow-root">
                                <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                    <FaTwitter className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                    <span className="ml-3">Twitter</span>
                                </a>
                            </div>
                            <div className="flow-root mt-6 sm:mt-0 sm:ml-6">
                                <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                    <FaFacebook className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                    <span className="ml-3">Facebook</span>
                                </a>
                            </div>
                            <div className="flow-root mt-6 sm:mt-0 sm:ml-6">
                                <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                    <FaInstagram className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                    <span className="ml-3">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                        <div className="h-full flex flex-col justify-between py-6 px-4 bg-gray-50 rounded-xl">
                            <div className="pb-5">
                                <h3 className="text-2xl font-extrabold text-gray-900">Our Values</h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    At LogeAsi.com, we believe in providing the highest-quality products and services to our customers. We are committed to maintaining the highest standards of ethics
                                    and integrity in all our business practices. Our values include:
                                </p>
                                <ul className="mt-5 text-lg text-gray-500 list-disc list-inside">
                                    <li>Integrity and honesty</li>
                                    <li>Commitment to excellence</li>
                                    <li>Respect for customers and employees</li>
                                    <li>Innovation and creativity</li>
                                </ul>
                            </div>
                            <div className="text-lg text-gray-500">
                                <p>
                                    LogeAsi.com is a subsidiary of XYZ Inc., a global leader in e-commerce and technology solutions. With over 20 years of experience in the industry, we have built a
                                    reputation for excellence and innovation, and we continue to strive towards new heights in customer service and satisfaction.
                                </p>
                                <p className="mt-4">
                                    Thank you for choosing LogeAsi.com as your preferred shopping destination. We look forward to serving you and exceeding your expectations every time you shop with
                                    us.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xs absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                            <svg className="absolute bottom-0 right-0 mb-8 transform translate-x-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <div className="flex justify-center -mt-12">
                                <img className="rounded-full bg-white p-2" src="https://dummyimage.com/150x150/4A5568/ffffff" alt="" width="150" height="150" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
