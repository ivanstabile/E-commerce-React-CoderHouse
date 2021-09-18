import React, { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import { generateOrder } from "../../firebase/generateOrder";
import Swal from "sweetalert2";
import { Redirect } from "react-router";

export const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(Context);

    const [values, setValues] = useState({
        name: "",
        email: "",
        tel: 0,
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.name.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generateOrder(values, cart, totalCart())
                .then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "Order received!",
                        text: `Save this id: ${res}`,
                        confirmButtonText: "Lets Play!",
                    });

                    clearCart();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid info",
                text: "Check your info",
            });
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <hr />

            {!cart.length ? (
                <Redirect to="/" />
            ) : (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={values.name} onChange={handleInputChange} name="name" required />
                        <input type="tel" value={values.tel} onChange={handleInputChange} name="tel" required />
                        <input type="email" value={values.email} onChange={handleInputChange} name="email" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};
