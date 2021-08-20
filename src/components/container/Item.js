import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ img, price, name, genre, id }) => {
    return (
        <div className="card__container">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: ${price}</p>
                        <p>Genre: {genre}</p>
                        <p>{id}</p>
                    </Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
