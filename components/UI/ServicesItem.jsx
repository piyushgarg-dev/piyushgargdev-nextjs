import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon, link }) => {
  return (
    <div className={`${classes.service__item}`}>
      <a href={link}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
      </a>
    </div>
  );
};

export default ServicesItem;
