import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <div className="flex items-center max-md:justify-center">
      <div className={`${classes.section__line}`}></div>
      <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>
    </div>
  );
};

export default SectionSubtitle;
