import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart.js";
import { Nav, NavDropdown } from "react-bootstrap";
import { GiConsoleController } from "react-icons/gi";

import "./NavBar.scss";
export const NavBar = () => {
    return (
        <header className="header">
            <Nav className="container nav" defaultActiveKey="/home" as="ul">
                <Nav.Item className="nav__link" as="li">
                    <Link className="nav__link" to={"/"}>
                        <GiConsoleController className="logo__icon" />
                    </Link>
                </Nav.Item>
                <NavDropdown title="Games" id="nav-dropdown">
                    <NavDropdown.Item className="dropdown__item">
                        <Link to={"/genre/horror"}>Horror</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown__item" eventKey="4.2">
                        <Link to={"/genre/suspense"}>Suspense</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown__item">
                        <Link to={"/genre/adventure"}>Adventure</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown__item">
                        <Link to={"/genre/action"}>Action</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown__item">
                        <Link to={"/genre/indie"}>Indie</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="nav__link" as="li">
                    <Link to={"/about"}>About</Link>
                </Nav.Item>
                <Cart />
            </Nav>
        </header>
    );
};
