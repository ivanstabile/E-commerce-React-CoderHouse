import React, { useContext, useState } from "react";
import "./ItemDetail.scss";
import { Link } from "react-router-dom";
import { Counter } from "../Counter/Counter";
import { Context } from "../../Context/Context";

export const ItemDetail = ({ genre, id, name, desc, img, price, stock }) => {
    const { addToCart, isInCart } = useContext(Context);
    const [counter, setCounter] = useState(1);
    const handleAdd = () => {
        addToCart({
            genre,
            id,
            name,
            desc,
            price,
            stock,
            counter,
        });
    };

    return (
        <div>
            <section className="details__container container">
                <div className="img__container">
                    <img className="img" src={img} alt={name} />
                </div>
                <div>
                    <div className="text__container">
                        <h2 className="title">{name}</h2>
                        <p className="price">Price: ${price}</p>
                        <Link to={`/genre/${genre}`} className="tag">
                            {genre}
                        </Link>
                        <Link to={"/"} className="tag">
                            all
                        </Link>
                        <p>Description: {desc}</p>
                        <Counter max={stock} counter={counter} setCounter={setCounter} addToCart={handleAdd} added={isInCart(id)} />
                    </div>
                </div>
            </section>
        </div>
    );
};
