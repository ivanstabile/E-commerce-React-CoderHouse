import { createContext, useState, useMemo } from "react";

export const Context = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalCartAmount = useMemo(() => cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0), [cart]);
    const addToCart = (item) => {
        const isInCart = cart.some((prod) => prod.id === item.id);
        if (isInCart) {
            setCart((cart) => {
                return cart.map((product) => {
                    if (product.id == item.id) {
                        return {
                            ...product,
                            counter: product.counter + 1,
                        };
                    } else {
                        return product;
                    }
                });
            });
        } else {
            setCart((cart) => cart.concat({ ...item, counter: item.counter || 1 }));
        }
    };

    const deleteCartItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const cartCounter = () => {
        return cart.reduce((acc, prod) => acc + prod.counter, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const totalCart = () => {
        return cart.reduce((acc, prod) => acc + prod.counter * prod.price, 0);
    };

    return (
        <Context.Provider value={{ cart, totalCart, totalCartAmount, isInCart, addToCart, deleteCartItem, cartCounter, clearCart }}>
            {children}
        </Context.Provider>
    );
};
