import React from "react";
import { Cart } from "./Cart/Cart.js";
import "./NavBar.scss";
export const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#">GameHouse</a>
                <ul className="nav__ul">
                    <li className="nav__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <Cart />
            </nav>
        </header>
    );
};
