import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        alt={props.targetFetchImage.alt_description}
        src={props.targetFetchImage.urls.raw}
      />
     
    </div>
  );
};
