import React from "react";
import "./Tags.css";

export default function tags(props) {
    const getTags = props.content;
    const tag = getTags.map(getTag => {
        return <div className="tag" key={getTag}>
            <span>{getTag}</span>
        </div>
    })
    return (
        <div className="tags-container">
            {tag}
        </div>
    )
}