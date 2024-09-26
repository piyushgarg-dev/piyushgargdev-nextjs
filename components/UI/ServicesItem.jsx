import React from "react";
import classes from "../../styles/services-item.module.css";


const ServicesItem = ({ title, icon, link }) => {
 
  return (
    
    <div onClick={()=>  window.open(link, '_blank')} className={`${classes.service__item}`}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
