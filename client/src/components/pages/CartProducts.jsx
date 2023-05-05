/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CartProducts() {
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    const [cart, setCart] = useState(cartItem);

    const handleIncrease = (id) => {
        // Increase product quantity in cart

        const findProduct = cartItem.find((el) => el._id === id);

        if (findProduct) {
            const updateQuantity = {
                ...findProduct,
                quantity: findProduct.quantity + 1
            };

            const updatedProduct = cart.map((product) => {
                if (product._id === id) {
                    return updateQuantity;
                }
                return product;
            });
            // localStorage.setItem('cartItem', JSON.stringify({ ...updatedProduct }));

            setCart(updatedProduct);
        }
    };

    const handleDecrease = (id) => {
        // Decrease product quantity in cart
        const findProduct = cart.find((el) => el._id === id);
        if (findProduct) {
            const updateQuantity = {
                ...findProduct,
                quantity: findProduct.quantity === 0 ? 0 : findProduct.quantity - 1
            };
            const updatedCart = cart.map((prod) => {
                if (prod._id === id) {
                    return updateQuantity;
                }
                return prod;
            });
            setCart(updatedCart);
        }
    };

    const handleRemove = (id) => {
        // Remove product from cart
        const fillteredProduct = cart.filter((el) => el._id !== id);
        setCart(fillteredProduct);
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/');
        }
    }, [cart.length]);

    return (
        <div className="max-w-screen-lg mx-auto py-10">
            <h1 className="text-3xl font-bold mb-5">Cart</h1>
            <div className="flex flex-col">
                {cart.map((product) => (
                    <div key={product._id} className="flex flex-col md:flex-row items-center mb-5">
                        <img src={product.photo} alt={product.name} className="w-24 h-24 object-contain rounded-lg shadow-md mb-3 md:mb-0" />
                        <div className="flex flex-col flex-grow justify-between md:ml-5">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="p-1 text-gray-700 hover:text-black rounded-full" onClick={() => handleDecrease(product._id)}>
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-bold mx-2">{product.quantity}</span>
                                    <button type="button" className="p-1 text-gray-700 hover:text-black rounded-full" onClick={() => handleIncrease(product._id)}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <span className="text-lg font-bold">${product.price * product.quantity}</span>
                            </div>
                        </div>
                        <button type="button" className="ml-auto pb-8 text-red-600 font-bold" onClick={() => handleRemove(product._id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-end items-center mt-5">
                <h2 className="text-lg font-bold mr-5">Total:</h2>
                <h2 className="text-2xl font-bold">${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</h2>
            </div>
        </div>
    );
}

export default CartProducts;
