import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import "./Carousel.css";

export default function Carousel(props) {
    const cover = props.cover;
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== cover.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === cover.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(cover.length)
        }
    }

    if(cover.length > 1) {
        return (
            <div className="carousel-container" key={slideIndex}>
                {cover.map((obj, index) => {
                    return (
                        <div 
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        key={index}
                        >
                            <img className="slide-img" src={obj} alt="" />
                        </div>
                    )
                })}
                <div className="button-carousel">
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className="carousel-container" key={slideIndex}>
                {cover.map((obj, index) => {
                    return (
                        <div 
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        key={index}
                        >
                            <img className="slide-img" src={obj} alt="" />
                        </div>
                    )
                })}
            </div>
        )
    }
}
