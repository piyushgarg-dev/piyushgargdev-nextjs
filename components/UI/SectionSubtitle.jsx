import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return <h5 className={`${classes.section__subtitle} mb-3`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
