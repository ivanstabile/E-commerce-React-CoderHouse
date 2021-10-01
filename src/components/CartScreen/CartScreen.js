import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import "./cartScreen.scss";
import { Link } from "react-router-dom";

export const CartScreen = () => {
    const { cart, deleteCartItem, clearCart, totalCartAmount } = useContext(Context);
    console.log(cart);

    return (
        <>
            {cart == 0 ? (
                <div className="empty__cart container">
                    <div className="img__container">
                        <img className="img" src="./images/empty.svg" alt="empty cart"></img>
                    </div>
                    <Link className="btn btn-danger back-button" to={"/"}>
                        Back
                    </Link>
                </div>
            ) : (
                <div className="container">
                    <div className="cart container">
                        {cart.map((prod) => (
                            <div className="cart__detail" key={prod.id}>
                                <p className="cart-item-title">{prod.name}</p>
                                <div className="cart-container-p-btn">
                                    <p className="cart-item-p"> ${prod.price * prod.counter}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => deleteCartItem(prod.id)}>
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                        <h3 className="text-black">Total: {totalCartAmount}</h3>
                        <div className="buttons">
                            <Link to={"/checkout"}>
                                <button className="btn btn-success cart-button-delete">Checkout</button>
                            </Link>
                            <button className="btn btn-danger cart-button-delete" onClick={clearCart}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <button className="btn btn-outline-success btn-lg cart-button-back">Back</button>
                    </Link>
                </div>
            )}
        </>
    );
};
