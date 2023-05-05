/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import useTitle from '../../../hooks/useTitle';

function Contact() {
    useTitle('Contact');
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Contact Us</h2>
                    <p className="mt-2 text-lg text-gray-600">If you have any questions or feedback, please don't hesitate to reach out to us.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <HiOutlineMail className="h-16 w-16 text-indigo-500 mb-4" />
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Email Us</h3>
                            <p className="mt-2 text-sm text-gray-500">Send us an email at contact@logeasi.com and we'll reply within 24 hours.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <HiOutlinePhone className="h-16 w-16 text-indigo-500 mb-4" />
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Call Us</h3>
                            <p className="mt-2 text-sm text-gray-500">Call us at (555) 123-4567 during our business hours: Monday to Friday, 9am - 5pm EST.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <FaTwitter className="h-16 w-16 text-indigo-500 mb-4" />
                            <FaFacebook className="h-16 w-16 text-indigo-500 mb-4" />
                            <FaInstagram className="h-16 w-16 text-indigo-500 mb-4" />
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Follow Us</h3>
                            <p className="mt-2 text-sm text-gray-500">Follow us on social media to stay up-to-date with our latest news, promotions, and product releases.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-lg font-medium text-gray-900">Visit Us In Person</h3>
                    <p className="mt-2 text-sm text-gray-500">You can also visit us in person at our headquarters:</p>
                    <p className="mt-2 text-sm text-gray-500">
                        123 Main St.
                        <br />
                        Suite 456
                        <br />
                        Anytown, USA 12345
                    </p>
                    <p className="mt-2 text-sm text-gray-500">Please note that visits are by appointment only.</p>
                </div>
            </div>
        </div>
    );
}
export default Contact;
