import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Button from "react-bootstrap/Button";
import "./cartScreen.scss";
import { Link } from "react-router-dom";

export const CartScreen = () => {
    const { cart, deleteCartItem, clearCart } = useContext(Context);
    return (
        <>
            {cart == 0 ? (
                <Link class="btn btn-danger" to={"/"}>
                    Back
                </Link>
            ) : (
                <div className="cart">
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
                    <Link to={"/checkout"}>
                        <Button className="btn btn-success cart-button-delete">Checkout</Button>
                    </Link>
                </div>
            )}
        </>
    );
};
