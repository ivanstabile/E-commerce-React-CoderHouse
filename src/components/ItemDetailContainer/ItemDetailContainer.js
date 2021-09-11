import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import apiCall from "../../helpers/apiCall";
import { getFirestore } from "../../firebase/config";
import { Spinner } from "../Spinner/Spinner";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const dbItems = db.collection("Games");
        const item = dbItems.doc(itemId);
        item.get()
            .then((doc) => {
                setItem({ ...doc.data(), id: doc.id });
            })
            .finally(() => {
                setLoading(false);
            });

        // apiCall().then((res) => {
        //     setItem(res.find((prod) => prod.id === parseInt(itemId)));
        // });
    }, [itemId]);
    return <div>{loading ? <Spinner /> : item && <ItemDetail {...item} />}</div>;
};
