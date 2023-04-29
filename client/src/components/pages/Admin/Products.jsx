/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

function Products() {
    const { userInfo } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    // get all products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/product/getall-products/', {
                headers: {
                    // eslint-disable-next-line comma-dangle
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                toast.success('Products Data is Showing');
                setProducts(data.products);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occured while fetching the all Products!!');
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/product/delete-product/${id}`, {
                headers: {
                    // eslint-disable-next-line comma-dangle
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                toast.success('Product is Deleted!!!');
                getAllProducts();
            }
        } catch (error) {
            console.log(error);
            toast.error('Error ocurred when Deleting the Product!!');
        }
    };
    return (
        <>
            <h1 className="text-3xl font-bold text-center py-4">All Created Products List</h1>
            <div className="w-full grid-cols-4 gap-6 justify-items-center">
                {products &&
                    products.map((product) => (
                        <div key={product._id} className="bg-white shadow-lg rounded-lg p-8 mb-4 flex justify-between items-center">
                            <div className="flex">
                                <img src={product.photo} alt={product.name} className="w-24 h-24 rounded-lg mr-4" />
                                <div className="grow mr-5">
                                    <h2 className="font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 text-sm w-11/12">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-gray-800 mt-2">${product.price}</p>
                                        <p className="font-bold text-gray-800 mt-2">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex text-2xl">
                                <Link to="/dashboard/admin/update-products" state={product} className="text-gray-600 hover:text-gray-900 mr-2">
                                    <FaEdit />
                                </Link>
                                <button className="text-gray-600 hover:text-gray-900" onClick={() => handleDelete(product._id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Products;
