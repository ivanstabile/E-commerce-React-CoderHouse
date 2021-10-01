import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const Item = ({ img, price, name, genre, id }) => {
    return (
        <div className="card__container">
            <Card className="myCard">
                <Link to={`/details/${id}`}>
                    <Card.Img className="image" variant="top" src={img} alt={name} />
                </Link>
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text className="price">Price: ${price}</Card.Text>
                    <Card.Text>Genre: {genre}</Card.Text>

                    <button className="more btn">
                        <Link to={`/details/${id}`}>More</Link>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};
