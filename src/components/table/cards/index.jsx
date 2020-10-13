import React from "react";
import "./cards.scss";

export const Cards = ({ name, price, description, image_url }) => {
  return (
    <div className="card__container">
      <div className="image__container">
        <img src={image_url} alt="" />
      </div>
      <div className="card__text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
