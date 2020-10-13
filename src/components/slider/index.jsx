import React from "react";
import { Stepper } from "./stepper/index";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./arrows/arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import "../../theme/theme.scss";

export const SliderSlick = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const stepperOne = {
    title: "PRODUCT",
    number: "ONE",
    firstPriceNumber: "99",
    secondPriceNumber: ".50",
    type: "U$S",
    month: "/mes",
  };

  const stepperTwo = {
    title: "PRODUCT",
    number: "TWO",
    firstPriceNumber: "98",
    secondPriceNumber: ".50",
    type: "U$S",
    month: "/mes",
  };

  return (
    <Slider {...settings}>
      <Stepper
        title={stepperOne.title}
        number={stepperOne.number}
        firstPriceNumber={stepperOne.firstPriceNumber}
        secondPriceNumber={stepperOne.secondPriceNumber}
        type={stepperOne.type}
        month={stepperOne.month}
      />
      <Stepper
        title={stepperTwo.title}
        number={stepperTwo.number}
        firstPriceNumber={stepperTwo.firstPriceNumber}
        secondPriceNumber={stepperTwo.secondPriceNumber}
        type={stepperTwo.type}
        month={stepperTwo.month}
      />
    </Slider>
  );
};
