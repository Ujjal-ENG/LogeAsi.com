/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
