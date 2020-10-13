import React from "react";
import "./toolbar.scss";
import "../../theme/theme.scss";
import { FaFacebook } from "react-icons/fa";

export const Toolbar = ({ title, social, theme }) => {
  return (
    <div className="navbar__container theme__text theme__light__text">
      <div className="title__container">
        <p className="title__text">{title}</p>
      </div>
      <div className="social__container ">
        <p className="social__text ">{social}</p>
        <a
          href="https://www.facebook.com/"
          className="social__link theme__text theme__light__text"
        >
          <FaFacebook className="facebook__icon" />
        </a>
      </div>
    </div>
  );
};
