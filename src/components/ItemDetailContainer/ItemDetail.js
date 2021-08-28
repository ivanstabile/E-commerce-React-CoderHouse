import React from "react";
import "./ItemDetail.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const ItemDetail = ({ genre, id, name, desc, img, price }) => {
    return (
        <div>
            <section className="details__container">
                <div className="img__container">
                    <img className="img" src={img} alt={name} />
                </div>
                <div>
                    <div className="text__container">
                        <h2 className="title">{name}</h2>
                        <p>Price: ${price}</p>
                        <Link to={`/genre/${genre}`} className="tag">
                            {genre}
                        </Link>
                        <Link to={"/"} className="tag">
                            all
                        </Link>
                        <p>Description: {desc}</p>
                        <button className="btn btn-primary mx-3">+</button>
                        <span>0</span>
                        <button className="btn btn-danger mx-3">-</button>
                        <Button className="buy" variant="primary">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
