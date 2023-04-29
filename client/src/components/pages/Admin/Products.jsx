/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Products() {
    const [product, setProduct] = useState([]);
    return (
        <>
            <h1 className="text-3xl font-bold text-center py-4">All Created Products List</h1>
            <div className="w-full grid-cols-4 gap-6 justify-items-center">
                <div className="bg-white shadow-lg rounded-lg p-8 mb-4 flex justify-between items-center">
                    <div className="flex">
                        <img src={product.photo} alt={product.name} className="w-24 h-24 rounded-lg mr-4" />
                        <div>
                            <h2 className="font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <p className="font-bold text-gray-800 mt-2">${product.price}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="text-gray-600 hover:text-gray-900 mr-2">
                            <FaEdit />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
