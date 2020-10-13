import React from "react";
import { CustomButton } from "../../button/index";
import "./stepper.scss";
import "../../../theme/theme.scss";

export const Stepper = ({
  title,
  number,
  firstPriceNumber,
  secondPriceNumber,
  type,
  month,
}) => {
  const onClick = (e) => {
    e.preventDefault();
    alert("Checking Button");
  };
  return (
    <div className="slider__container">
      <div className="text__slider__container">
        <p className="title__product ">{title}</p>
        <p className="subtitle__number ">{number}</p>
        <CustomButton
          onClick={(event) => onClick(event)}
          buttonText="COMPRAR"
        />
      </div>
      <div className="paint__img__container ">
        <img src="https://i.ibb.co/Tr6kjN2/paint-stains.png" alt="" />
        <p className="exchange__symbol theme__price__text">{type}</p>
        <p className="price__primary__number theme__price__text">
          {firstPriceNumber}
        </p>
        <p className="price__secondary__number theme__price__text">
          {secondPriceNumber}
        </p>
        <p className="month__text theme__price__text">{month}</p>
      </div>
    </div>
  );
};
