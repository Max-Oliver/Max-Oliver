import React from "react";
import "./button.scss";
import "../../theme/theme.scss";

export const CustomButton = ({ onClick, buttonText, type }) => {
  return (
    <div>
      <button className="custom__button" type={type} onClick={onClick}>
        <p className="button_text">{buttonText}</p>
      </button>
    </div>
  );
};
