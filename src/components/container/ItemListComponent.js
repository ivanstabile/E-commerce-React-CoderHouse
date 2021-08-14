import React from "react";
import "./ItemListComponent.scss";
export const ItemListComponent = ({ greeting }) => {
    return (
        <div className="itemListComponent">
            <h2>{greeting}</h2>
        </div>
    );
};
