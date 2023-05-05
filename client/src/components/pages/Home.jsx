/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useCart } from '../../context/CartProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../layouts/Spinner';

function Home() {
    const { userInfo } = useContext(AuthContext);
    const [cart, setCart] = useCart([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [filterProduct, setFilterProduct] = useState([]);

    // set title
    useTitle('Home');

    // getTotalCount
    const getTotal = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/product/product-count');
            if (data.success) {
                setTotal(data?.total);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error occured while the GetToalFunction CALLED!!');
        }
    };

    // get products
    const getAllProducts = async () => {
        setIsLoading(true);
        try {
            if (userInfo && userInfo.token) {
                const { data } = await axios.get('http://localhost:8080/api/v1/product/getall-products', {
                    headers: {
                        Authorization: userInfo.token
                    }
                });
                if (data.success) {
                    toast.success('All Products Data!!');
                    setProducts(data.products);
                    setFilterProduct(data.products);
                    setIsLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error('Error ocurred while fetching the All Products Data!!');
        }
    };

    // get all category
    const getAllCategory = async () => {
        setIsLoading(true);
        try {
            if (userInfo && userInfo?.token) {
                const { data } = await axios.get('http://localhost:8080/api/v1/category/getall-category/', {
                    headers: {
                        Authorization: userInfo?.token
                    }
                });

                if (data.success) {
                    setCategories(data.Categoires);
                    setIsLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in the getting categories');
        }
    };
    // load more
    const loadMore = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`http://localhost:8080/api/v1/category/product-list/${page}`);
            setIsLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            toast.error('Something went wrong in the Page');
        }
    };

    useEffect(() => {
        getAllProducts();
        getAllCategory();
        getTotal();
        if (page === 1) return;
        loadMore();
    }, [userInfo]);

    if (loading) {
        return <Spinner />;
    }
    const handleChange = (e) => {
        const filterData = filterProduct.filter((el) => el.category._id === e.target.value);

        if (e.target.checked) {
            setProducts(filterData);
        } else {
            setProducts(filterProduct);
        }
    };
    const handleAddToCart = (product) => {
        setCart((ps) => {
            // check exists product or not
            const existingProduct = ps.find((el) => el._id === product._id);
            if (existingProduct) {
                const updatedProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1
                };

                const updatedCartsProduct = ps.map((el) => (el._id === product._id ? updatedProduct : el));
                localStorage.setItem('cartItem', JSON.stringify(updatedCartsProduct));
                return updatedCartsProduct;
            }

            const updatedCart = [...ps, { ...product, quantity: 1 }];
            localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
        toast.success('Product is added!!');
    };

    return (
        <div className="grid grid-cols-12 gap-4 px-5 pt-5">
            <div className="col-span-3">
                <h6 className="text-xl font-bold">Filter By Category</h6>
                <div className="mr-14">
                    {categories &&
                        categories.map((el) => (
                            <div key={el._id} className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text">{el.name}</span>
                                    <input type="checkbox" className="checkbox checkbox-success" id="checkbox" name="checkbox" value={el._id} onChange={handleChange} />
                                </label>
                            </div>
                        ))}
                </div>
            </div>

            <div className="col-span-9 w-full ">
                <h1 className=" font-bold text-3xl text-center w-full">All Products</h1>
                <div className="grid grid-cols-3 py-5 gap-6">
                    {products &&
                        products.map((product) => {
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
                                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full h-full" onClick={() => handleAddToCart(product)}>
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
                <div className=" py-3 flex justify-center">
                    {products && products.length < total && (
                        <button
                            type="button"
                            className="btn btn-wide btn-success"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                            }}>
                            {loading ? 'Loading..Please Wait!!' : 'Load More Product!!'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
