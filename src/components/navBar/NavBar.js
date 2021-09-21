import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart.js";
import { GiConsoleController } from "react-icons/gi";
import { Nav } from "react-bootstrap";

import "./NavBar.scss";
export const NavBar = () => {
    return (
        <header className="header container">
            <Link to={"/"}>
                <GiConsoleController className="logo__icon" />
            </Link>
            <Nav className="nav" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to={"/genre/horror"}>
                        Horror
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to={"/genre/indie"}>
                        Indie
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to={"/genre/suspense"}>
                        Suspense
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to={"/genre/adventure"}>
                        Adventure
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to={"/genre/action"}>
                        Action
                    </Link>
                </Nav.Item>
            </Nav>
            <Cart />
        </header>
    );
};
