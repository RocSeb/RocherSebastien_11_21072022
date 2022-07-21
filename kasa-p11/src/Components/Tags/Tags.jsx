import React from "react";
import "./Tags.css";

export default function tags(props) {
    const getTags = props.content;
    const tag = getTags.map(getTag => {
        return <span className="tag" key={getTag}>{getTag}</span>
    })
    return (
        <div className="tags-container">
            {tag}
        </div>
    )
}