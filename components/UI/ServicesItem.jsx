import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon }) => {
  return (
    <div className={`${classes.service__item}`}>
      <span>
        <i className={icon}></i>
      </span>

      <a href="https://www.youtube.com/@piyushgargdev">
        <h5>{title}</h5>
      </a>

    </div>
  );
};

export default ServicesItem;
