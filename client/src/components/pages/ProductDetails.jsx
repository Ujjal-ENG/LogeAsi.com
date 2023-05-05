/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

function ProductDetails() {
    useTitle('Product Details');
    const { userInfo } = useContext(AuthContext);
    const [singleProduct, setSingleProduct] = useState([]);
    const [reletedProduct, setReletedProduct] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const { slug } = useParams();

    // get similar products
    const getReletedProductDetails = async (pid, cid) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product/search-releted-product/${pid}/${cid}`);
            if (data.success) {
                setReletedProduct(data.products);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    // getSingleProductDetails
    const getSingleProductDetails = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product/getSingle-product/${slug}`, {
                headers: {
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                setSingleProduct(data.singleProduct);
                getReletedProductDetails(data?.singleProduct._id, data?.singleProduct.category._id);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleProductDetails();
    }, []);

    if (isLoading) {
        return <progress className="progress w-56" />;
    }

    return (
        <div className="max-w-7xl mx-auto py-5 space-y-6">
            <div key={singleProduct._id} className="bg-white rounded-md overflow-hidden shadow-md w-full grid grid-cols-2  h-full">
                <img src={singleProduct.photo} alt={singleProduct.name} className="w-3/4 h-96 bg-contain object-cover" />
                <div className="p-4 flex-grow relative">
                    <h1 className="text-4xl font-bold text-center py-4">Product Details</h1>
                    <h2 className="font-bold text-lg mb-2">{singleProduct.name}</h2>
                    <p className="text-gray-700 text-base mb-4">{singleProduct.description}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700 font-bold text-xl">{singleProduct.price} USD</p>
                        <p className="text-gray-600">{singleProduct.quantity} left in stock</p>
                    </div>
                    <div className="bottom-0 absolute grid grid-cols-2 gap-40 ">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full  h-full">
                            Add to Cart
                        </button>
                        <Link to="/" type="button" className="btn hover:bg-black text-white font-bold py-2 px-4 rounded-full h-full">
                            Go Back Product Page
                        </Link>
                    </div>
                </div>
            </div>

            {reletedProduct ? (
                <div>
                    <h1 className="text-4xl font-bold text-center pb-5">Similar Product Found {reletedProduct && reletedProduct.length}</h1>
                    <div className="grid grid-cols-3">
                        {reletedProduct &&
                            reletedProduct.map((product) => {
                                const { _id, photo, price, quantity, name, description } = product;
                                return (
                                    <div key={_id} className="bg-white rounded-md overflow-hidden shadow-md w-80 flex flex-col h-full">
                                        <img src={photo} alt={name} className="w-full h-64 object-cover" />
                                        <div className="p-4 flex-grow">
                                            <h2 className="font-bold text-lg mb-2">{name}</h2>
                                            <p className="text-gray-700 text-base mb-4">{description}</p>
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-700 font-bold text-xl">{price} USD</p>
                                                <p className="text-gray-600">{quantity} left in stock</p>
                                            </div>
                                        </div>
                                        <div className="mt-auto flex justify-between items-center p-2">
                                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full h-full">
                                                Add to Cart
                                            </button>
                                            <Link to={`/product-details/${product.slug}`} type="button" className="btn hover:bg-black text-white font-bold py-2 px-4 rounded-full h-full">
                                                Product Details
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ) : (
                <progress className="progress w-56" />
            )}
        </div>
    );
}

export default ProductDetails;
