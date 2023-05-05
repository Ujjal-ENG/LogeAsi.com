import React from 'react';
import { useCart } from '../../context/CartProvider';

function CartProducts() {
    const [cart, setCart] = useCart([]);
    return <div>hello</div>;
}

export default CartProducts;
