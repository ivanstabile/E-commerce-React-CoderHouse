import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Button from "react-bootstrap/Button";
import "./cartScreen.scss";

export const CartScreen = () => {
    const { cart, deleteCartItem, clearCart } = useContext(Context);
    return (
        <div className="cart">
            <h1>Hello there, thanks for your purchase</h1>
            {cart.map((prod) => (
                <div className="cart__detail" key={prod.id}>
                    <p className="cart-item-title">{prod.name}</p>
                    <div className="cart-container-p-btn">
                        <p className="cart-item-p">Price: ${prod.price * prod.counter}</p>
                        <Button className="btn btn-danger cart-button" onClick={() => deleteCartItem(prod.id)}>
                            X
                        </Button>
                    </div>
                </div>
            ))}
            <Button className="btn btn-danger cart-button-delete" onClick={clearCart}>
                Delete
            </Button>
        </div>
    );
};
