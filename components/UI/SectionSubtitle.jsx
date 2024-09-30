import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <h5 className={`${classes.section__subtitle}`}>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="border-b-2 border-black pb-1 inline-block"> 
        {props.subtitle}
      </a>
    </h5>
  );
};

export default SectionSubtitle;
