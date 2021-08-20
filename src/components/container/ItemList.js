import React from "react";
import { Item } from "./Item";
export const ItemList = ({ products }) => {
    return (
        <section className="products">
            <h2>Games</h2>
            <div className="card__container">
                {products.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))}
            </div>
        </section>
    );
};
