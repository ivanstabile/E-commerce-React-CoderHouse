import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.scss";

export const CarouselComponent = () => {
    return (
        <Carousel className="carousel__container">
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/images/game1.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/images/game2.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/images/game3.jpg" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
};
