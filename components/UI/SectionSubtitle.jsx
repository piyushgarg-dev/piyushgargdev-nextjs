import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <div className={`${classes.section__padding}`}>
    <h5 className={`${classes.section__subtitle}`}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.subtitle}
      </a>
    </h5>
    </div>
  );
};

export default SectionSubtitle;
