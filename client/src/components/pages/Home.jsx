/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../layouts/Spinner';

function Home() {
    const { userInfo } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setIsLoading] = useState(false);

    // get products
    const getAllProducts = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get('http://localhost:8080/api/v1/product/getall-products', {
                headers: {
                    // eslint-disable-next-line comma-dangle
                    Authorization: userInfo?.token
                }
            });
            if (data.success) {
                toast.success('All Products Data!!');
                setProducts(data.products);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occured while fetching the All Products Data!!');
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="grid grid-cols-12 gap-4 px-5 pt-5">
            <div className="col-span-3">
                <h6 className="text-xl font-bold">Filter By Category</h6>
            </div>

            <div className="col-span-9 w-full ">
                <h1 className=" font-bold text-3xl text-center w-full">All Products</h1>
                <div className="grid grid-cols-3 py-5">
                    {products &&
                        products.map((product) => {
                            const { _id, photo, price, quantity, name, description } = product;
                            return (
                                <div key={_id} className="bg-white rounded-md overflow-hidden shadow-md w-80 flex flex-col">
                                    <img src={photo} alt={name} className="w-full h-64 object-cover" />
                                    <div className="p-4 flex-grow">
                                        <h2 className="font-bold text-lg mb-2">{name}</h2>
                                        <p className="text-gray-700 text-base mb-4">{description}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-700 font-bold text-xl">{price} USD</p>
                                            <p className="text-gray-600">{quantity} left in stock</p>
                                        </div>
                                        <div className="mt-auto">
                                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
