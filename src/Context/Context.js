import { createContext, useState } from "react";

export const Context = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (prod) => {
        setCart([...cart, prod]);
    };

    const deleteCartItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const cartQty = () => {
        return cart.reduce((acc, prod) => acc + prod.counter, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id == id);
    };

    return <Context.Provider value={{ cart, isInCart, addToCart, deleteCartItem, cartQty, clearCart }}>{children}</Context.Provider>;
};