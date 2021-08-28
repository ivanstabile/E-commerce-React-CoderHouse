import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "./spinner.scss";

export const Spinner = () => {
    const color = "#ffffff";
    const loading = "loading";
    const size = 10;

    return (
        <div className="sweet-loading spinner">
            <SyncLoader color={color} loading={loading} size={size} />
        </div>
    );
};
