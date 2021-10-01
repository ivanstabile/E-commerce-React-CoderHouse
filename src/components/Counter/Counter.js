import React from "react";
import { Link } from "react-router-dom";
import "./counter.scss";

export const Counter = ({ max, counter, setCounter, addToCart, added }) => {
    const handleSum = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }
    };
    const handleRes = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="detail">
            <div className="detail__btns">
                <div className="detail__btns-add">
                    <button className="btns btn" onClick={handleRes} disabled={added}>
                        -
                    </button>
                    <p>{counter}</p>
                    <button className="btns btn" onClick={handleSum} disabled={added}>
                        +
                    </button>
                </div>
                <button className="btns btn" onClick={addToCart} disabled={added}>
                    Add to cart
                </button>
                <div className="finish__container">
                    <button className="btns btn" disabled={!added}>
                        <Link to={"/cart"} className="btns text-white">
                            Finish
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
