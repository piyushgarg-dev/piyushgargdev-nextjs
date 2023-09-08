import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon, index }) => {
  return (
    <div
      className={`${classes.service__item} ${
        index === 2 ? classes.service__item__second : ""
      }`}
    >
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
