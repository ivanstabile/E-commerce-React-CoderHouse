import React from "react";
import "./heroComponent.scss";

export const HeroComponent = () => {
    return (
        <div className="container container__main">
            <div className="img__container">
                <img src="./images/gamer.svg" alt="games for sale"></img>
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
    );
};
