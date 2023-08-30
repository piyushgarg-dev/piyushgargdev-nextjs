import React from "react";
import classes from "../../styles/subtitle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


const SectionSubtitle = (props) => {
  if (props.subtitle === "Youtube") {
    return (
      <>
        <a
          href="https://www.youtube.com/@piyushgargdev?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
        >

          <h1 className={`${classes.section__subtitle}`}>
            {props.subtitle}{" "}
            
            {/* adding a backgroundImage for the play button white  */}
            <div className="bg-cover bg-center inline-block h-[29px] w-[26px]" style={{ backgroundImage: 'url(/images/youtube_bg.png)' }}>
              <FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }} />
            </div>
          </h1>
        </a>
      </>
    );
  }
};

export default SectionSubtitle;
