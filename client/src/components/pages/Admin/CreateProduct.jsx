/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../layouts/Spinner';

function CreateProduct() {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    // get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/category/getall-category/', {
                headers: {
                    // eslint-disable-next-line comma-dangle
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                setCategories(data.Categoires);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in the getting categories');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    return (
        <div className="bg-gray-50  my-5 flex flex-col justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Add Product</h1>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.history.back()}>
                        <FaArrowLeft className="inline-block mr-2" /> Back
                    </button>
                </div>
                <form>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="font-medium mb-2">
                            Product Name
                        </label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="slug" className="font-medium mb-2">
                            Slug
                        </label>
                        <input type="text" id="slug" name="slug" className="border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="font-medium mb-2">
                            Description
                        </label>
                        <textarea id="description" name="description" rows="4" className="border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="price" className="font-medium mb-2">
                            Price
                        </label>
                        <input type="number" id="price" name="price" className="border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="category" className="font-medium mb-2">
                            Category
                        </label>
                        <select id="category" name="category" className="border border-gray-300 rounded-md p-2">
                            <option value="">Select a category</option>
                            {categories ? (
                                categories.map((el) => (
                                    <option value={el._id} key={el._id}>
                                        {el.name}
                                    </option>
                                ))
                            ) : (
                                <Spinner />
                            )}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="quantity" className="font-medium mb-2">
                            Quantity
                        </label>
                        <input type="number" id="quantity" name="quantity" className="border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="photo" className="font-medium mb-2">
                            Photo
                        </label>
                        <div className="flex">
                            <input type="file" id="photo" name="photo" className="sr-only" />
                            <label htmlFor="photo" className="border border-gray-300 rounded-md p-2 cursor-pointer">
                                Choose file
                            </label>
                            <span className="text-gray-500 mx-2">or</span>
                            <button type="button" className="border border-gray-300 rounded-md p-2 cursor-pointer">
                                Take photo
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="shipping" name="shipping" className="mr-2" />
                        <label htmlFor="shipping">Shipping</label>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                            <FaCheck className="inline-block mr-2" />
                            Save
                        </button>
                        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => window.history.back()}>
                            <FaTimes className="inline-block mr-2" />
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;
