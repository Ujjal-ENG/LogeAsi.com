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
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../layouts/Spinner';

function CreateProduct() {
    const { userInfo } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        quantity: 0,
        photo: '',
        shipping: true
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.id]: e.target.value
        });
    };
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
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/product/create-product', product, {
                headers: {
                    // eslint-disable-next-line comma-dangle
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                toast.success('Product is Created Successfully!!');
                navigate('/dashboard/admin/products');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occured while tring to Create New Product!!');
        }
    };
    return (
        <div className="bg-gray-50  my-5 flex flex-col justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Add Product</h1>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => window.history.back()}>
                        <FaArrowLeft className="inline-block mr-2" /> Back
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="font-medium mb-2">
                            Product Name
                        </label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2" value={product.name} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="slug" className="font-medium mb-2">
                            Slug
                        </label>
                        <input type="text" id="slug" name="slug" className="border border-gray-300 rounded-md p-2" disabled value={product.name} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="font-medium mb-2">
                            Description
                        </label>
                        <textarea id="description" name="description" rows="4" className="border border-gray-300 rounded-md p-2" value={product.description} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="price" className="font-medium mb-2">
                            Price
                        </label>
                        <input type="number" id="price" name="price" className="border border-gray-300 rounded-md p-2" value={product.price} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="category" className="font-medium mb-2">
                            Category
                        </label>
                        <select id="category" name="category" className="border border-gray-300 rounded-md p-2" value={product.category} onChange={handleChange}>
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
                        <input type="number" id="quantity" name="quantity" className="border border-gray-300 rounded-md p-2" value={product.quantity} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="photo" className="font-medium mb-2">
                            Give Photo URL
                        </label>
                        <div className="flex">
                            <input type="text" id="photo" name="photo" className="border border-gray-300 rounded-md p-2" value={product.photo} onChange={handleChange} />

                            <div className="w-full justify-end">{product.photo && <img src={product.photo} alt="product_photo" className="object-contain" />}</div>
                        </div>
                    </div>

                    <div className=" items-center mb-4">
                        <select name="shipping" id="shipping">
                            <option value="">Shipping</option>
                            <option value>Yes</option>
                            <option value={false}>No</option>
                        </select>
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
