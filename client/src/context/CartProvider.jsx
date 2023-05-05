/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>;
}

export default CartProvider;
