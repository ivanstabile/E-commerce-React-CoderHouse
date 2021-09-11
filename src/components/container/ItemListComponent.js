import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../helpers/apiCall";
import { ItemList } from "./ItemList";
import { Spinner } from "../Spinner/Spinner";
import "./ItemListComponent.scss";
import { getFirestore } from "../../firebase/config";

export const ItemListComponent = () => {
    const { genreId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const dbItems = db.collection("Games");

        if (genreId) {
            const filtered = dbItems.where("genre", "==", genreId);
            filtered
                .get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setData(data);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            dbItems
                .get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setData(data);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        // apiCall()
        //     .then((res) => {
        //         if (genreId) {
        //             const filteredArray = res.filter((game) => game.genre === genreId);
        //             setData(filteredArray);
        //         } else {
        //             setData(res);
        //         }
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [genreId]);

    return (
        <div className="itemListComponent container-fluid m-0">
            <>{loading ? <Spinner /> : <ItemList products={data} />}</>
        </div>
    );
};
