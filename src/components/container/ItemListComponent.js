import React, { useEffect, useState } from "react";
import { call } from "../../helpers/call";
import { ItemList } from "./ItemList";
import "./ItemListComponent.scss";

export const ItemListComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        call()
            .then((res) => {
                setData(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="itemListComponent">
            <>{loading ? <h2>Loading...</h2> : <ItemList products={data} />}</>
        </div>
    );
};
