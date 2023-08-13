import React from "react";
import classes from "../../styles/subtitle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const SectionSubtitle = (props) => {
  if (props.subtitle === "Youtube") {
    return (
      <a
        href="https://www.youtube.com/@piyushgargdev?sub_confirmation=1"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className={`${classes.section__subtitle}`}>
          {props.subtitle}{" "}
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "red", stroke: "white" }}
          ></FontAwesomeIcon>
        </h5>
      </a>
    );
  }

  return <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
