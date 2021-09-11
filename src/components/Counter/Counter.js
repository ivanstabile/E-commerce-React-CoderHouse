import React from "react";
import Button from "react-bootstrap/Button";
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
            {/* {added ? (
                <Link className="btns" to={"/cart"} className="btn btn-success">
                    Finish
                </Link>
            ) : (
                <div className="detail__btns">
                    <Button className="btns" onClick={handleSum}>
                        +
                    </Button>
                    <p>{counter}</p>
                    <Button className="btns" onClick={handleRes}>
                        -
                    </Button>
                    <Button className="btns" onClick={addToCart} disabled={added} className="buy btn-success" variant="primary">
                        Add to cart
                    </Button>
                </div>
            )} */}
            <div className="detail__btns">
                <Button className="btns" onClick={handleSum} disabled={added}>
                    +
                </Button>
                <p>{counter}</p>
                <Button className="btns" onClick={handleRes} disabled={added}>
                    -
                </Button>
                <Button className="btns" onClick={addToCart} disabled={added} className="buy btn-success" variant="primary">
                    Add to cart
                </Button>
                <div className="finish__container">
                    <Button className="btns" disabled={!added}>
                        <Link to={"/cart"} className="btns text-white">
                            Finish
                        </Link>
                    </Button>
                    <Button className="btns" onClick={(added = true)} disabled={!added} className="buy btn-danger" variant="primary">
                        X
                    </Button>
                </div>
            </div>
        </div>
    );
};
