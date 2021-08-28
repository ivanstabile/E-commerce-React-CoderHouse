import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import apiCall from "../../helpers/apiCall";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        apiCall().then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(itemId)));
        });
    }, [itemId]);
    return <div>{item && <ItemDetail {...item} />}</div>;
};
