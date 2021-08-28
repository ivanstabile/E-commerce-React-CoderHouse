import React from "react";
import "./Cart.scss";
import { FaCartArrowDown } from "react-icons/fa";
export const Cart = ({ counter }) => {
    return (
        <div className="cart__container">
            <FaCartArrowDown className="cart__icon" />
            <span>{counter}</span>
        </div>
    );
};
