import React from "react";
import "./Carousel.css";
import leftArrow from "./icons/previous-btn.svg"
import rightArrow from "./icons/next-btn.svg"

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button
        onClick={moveSlide}
        className={direction === "prev" ? 'btn-slide prev' : 'btn-slide next'}
        >
            <img src={direction === "prev" ? leftArrow : rightArrow} alt="" />
        </button>
    )
}