import React, { useState } from "react";

export const InputEvent = () => {
    const [value, setValue] = useState("");
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <input type="text" value={value} onChange={handleInputChange} />
        </div>
    );
};
