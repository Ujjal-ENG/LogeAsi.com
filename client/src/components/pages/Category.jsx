/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

function Category() {
    useTitle('Category');
    const [loading, setLoadin] = useState(false);
    const [categoryWiseData, setCategoryWiseData] = useState({});
    const [productData, setProductData] = useState([]);
    const { slug } = useParams();
    // get category wise data
    const getCategoryWiseData = async () => {
        setLoadin(true);
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product/category-wise-products/${slug}`);
            if (data.success) {
                setLoadin(false);
                setCategoryWiseData(data?.categoryProduct);
                setProductData(data?.products);
            }
        } catch (error) {
            setLoadin(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getCategoryWiseData();
    }, [slug]);

    if (loading) {
        return <progress className="progress w-56" />;
    }
    console.log(productData);
    return (
        <div className="max-w-7xl mx-auto py-5">
            <h1 className="text-4xl font-bold text-center">
                Category is
                {` ${categoryWiseData?.name}`}
            </h1>

            <div className="grid grid-cols-3 py-8">
                {productData &&
                    productData.map((product) => {
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
    );
}

export default Category;
