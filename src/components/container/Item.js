import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ img, price, name, genre, id }) => {
    return (
        <div className="card__container">
            <Card className="myCard">
                <Card.Img className="image" variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Genre: {genre}</Card.Text>
                    <Button className="buy" variant="primary">
                        Add to cart
                    </Button>

                    <Link className="more" to={`/details/${id}`}>
                        More
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
