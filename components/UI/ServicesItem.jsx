import React, {useState} from "react";
import classes from "../../styles/services-item.module.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { IconContext } from "react-icons";

const ServicesItem = ({ title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <IconContext.Provider 
    value={{color: isHovered ? "black" : "white", className: classes.service__icon 
    }}
    >
      <a href="https://www.youtube.com/@piyushgargdev" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`${classes.service__item}`}>
          <span>
            <i className={icon}></i>
          </span>

          <h5>{title}</h5>
          <FiArrowRightCircle size={15}/>
        </div>
      </a>
    </IconContext.Provider>
  );
};

export default ServicesItem;
