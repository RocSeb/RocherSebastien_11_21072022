import React from "react";
import emptyStar from "./star-regular.svg"
import fullStar from "./star-solid.svg"
import "./rating.css"

export default function rating(props) {
    const ratingStars = props.rating
    let filledStar = []

    for (let i= 0; i < ratingStars; i++) {
        filledStar.push(<img src={fullStar} alt="rating star" key={i} />)
    }

    return (
        <div className="rating-container">
            <div className="empty-stars">
            <img src={emptyStar} alt="Empty star" />
            <img src={emptyStar} alt="Empty star" />
            <img src={emptyStar} alt="Empty star" />
            <img src={emptyStar} alt="Empty star" />
            <img src={emptyStar} alt="Empty star" />
            <div className="filled-stars">{filledStar}</div>
            </div>
        </div>
    )
}