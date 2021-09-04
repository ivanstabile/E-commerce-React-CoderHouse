import React, { useContext } from "react";
import "./Cart.scss";
import { FaCartArrowDown } from "react-icons/fa";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
export const Cart = () => {
    const { cartQty } = useContext(Context);

    return (
        <Link to={"/cart"}>
            <div className="cart__container">
                <FaCartArrowDown className="cart__icon" />
                <span>{cartQty()}</span>
            </div>
        </Link>
    );
};
