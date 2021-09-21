import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.scss";

export const CarouselComponent = () => {
    return (
        <div className="container container__main">
            <div className="img__container">
                <img src="./images/gamer.svg"></img>
            </div>
            <div className="text__container">
                <h1>
                    Welcome to our <span>shop!</span>
                </h1>
                <p>
                    play them, complete them. You want it — <span>we have it!</span>
                </p>
            </div>
        </div>
        // <Carousel className="carousel__container">
        //     <Carousel.Item>
        //         <img className="d-block w-100 carousel-img" src="/images/game1.jpg" alt="First slide" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100 carousel-img" src="/images/game2.jpg" alt="Second slide" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100 carousel-img" src="/images/game3.jpg" alt="Third slide" />
        //     </Carousel.Item>
        // </Carousel>
    );
};
