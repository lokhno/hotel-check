import React from "react";

import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import hotel1 from "../../static/img/hotel1.png";
import hotel2 from "../../static/img/hotel2.png";
import hotel3 from "../../static/img/hotel3.png";
import hotel4 from "../../static/img/hotel4.png";

import "./HoutelCarousel.scss";

export const HoutelCarousel = () => {
    return (
        <div className="houtel-carousel">
            <CarouselProvider
                naturalSlideWidth={149}
                naturalSlideHeight={149}
                totalSlides={5}
                visibleSlides={3.5}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}>
                        <div style={{ height: 149, marginRight: 12 }}>
                            <img src={hotel1}></img>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div style={{ height: 149, marginRight: 12 }}>
                            <img src={hotel2}></img>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div style={{ height: 149, marginRight: 12 }}>
                            <img src={hotel3}></img>
                        </div>
                    </Slide>
                    <Slide index={3}>
                        <div style={{ height: 149, marginRight: 12 }}>
                            <img src={hotel4}></img>
                        </div>
                    </Slide>
                    <Slide index={4}>
                        <div style={{ height: 149, marginRight: 12 }}>
                            <img src={hotel2}></img>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
    );
};
