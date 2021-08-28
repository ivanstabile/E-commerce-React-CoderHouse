import React from "react";

export const Prueba = () => {
    const arr = [
        {
            product: "calzado",
            id: 1,
        },
        {
            product: "remera",
            id: 2,
        },
        {
            product: "pantalon",
            id: 2,
        },
    ];

    const { product, id } = arr;

    return (
        <div>
            {arr.map(({ product, id }) => {
                return (
                    <li>
                        {product} {id}
                    </li>
                );
            })}
        </div>
    );
};
