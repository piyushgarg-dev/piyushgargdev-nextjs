import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon, hoverDirection = "up" }) => {
  const hoverClass = hoverDirection === "down" ? classes.service__item_down : classes.service__item;
  
  return (
    <div className={hoverClass}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
