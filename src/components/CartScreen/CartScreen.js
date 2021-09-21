import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import "./cartScreen.scss";
import { Link } from "react-router-dom";

export const CartScreen = () => {
    const { cart, deleteCartItem, clearCart } = useContext(Context);
    return (
        <>
            {cart == 0 ? (
                <div className="empty__cart">
                    <div className="img__container">
                        <img className="img" src="./images/empty.svg"></img>
                    </div>
                    <Link class="btn btn-danger back-button" to={"/"}>
                        Back
                    </Link>
                </div>
            ) : (
                <div className="cart">
                    {cart.map((prod) => (
                        <div className="cart__detail" key={prod.id}>
                            <h3 className="cart-item-title">{prod.name} -</h3>
                            <div className="cart-container-p-btn">
                                <h5 className="cart-item-p"> ${prod.price * prod.counter}</h5>
                                <button className="btn btn-danger cart-button" onClick={() => deleteCartItem(prod.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="buttons">
                        <Link to={"/checkout"}>
                            <button className="btn btn-success cart-button-delete">Checkout</button>
                        </Link>
                        <button className="btn btn-danger cart-button-delete" onClick={clearCart}>
                            Delete
                        </button>
                    </div>
                    <Link to={"/"}>
                        <button className="btn btn-outline-success btn-lg">Back</button>
                    </Link>
                </div>
            )}
        </>
    );
};
