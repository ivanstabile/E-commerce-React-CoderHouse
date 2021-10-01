import React, { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import { generateOrder } from "../../firebase/generateOrder";
import Swal from "sweetalert2";
import { Redirect } from "react-router";
import "./checkout.scss";

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
        <div className="checkout__container">
            <h2>Checkout</h2>
            {!cart.length ? (
                <Redirect to="/" />
            ) : (
                <div className="checkout__form-container">
                    <div className="credit-card-container">
                        {" "}
                        <img className="credit-card-img" src="./images/credit-card.svg" alt="credit card" />
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label>
                            {" "}
                            Name:
                            <input placeholder="Name" type="text" value={values.name} onChange={handleInputChange} name="name" required />
                        </label>

                        <label>
                            Phone number: <input placeholder="Phone" type="tel" value={values.tel} onChange={handleInputChange} name="tel" required />
                        </label>
                        <label>
                            Email:
                            <input placeholder="Email" type="email" value={values.email} onChange={handleInputChange} name="email" required />
                        </label>
                        <button className="btn btn-success btn-lg" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
