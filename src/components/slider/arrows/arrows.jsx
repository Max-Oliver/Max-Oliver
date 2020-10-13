import React from "react";
import "./arrows.scss";

export const NextArrow = ({ onClick }) => {
  return <div className="slick-arrow slick-next" onClick={onClick} />;
};

export const PrevArrow = ({ onClick }) => {
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
};
