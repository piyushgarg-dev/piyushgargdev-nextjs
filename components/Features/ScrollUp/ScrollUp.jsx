import React, { useEffect, useState } from "react";
import classes from "./scrollupbutton.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 600) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 800) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <>
      {showScroll ? (
        <MdKeyboardArrowUp
          onClick={scrollTop}
          className={classes.btn_icon}
        ></MdKeyboardArrowUp>
      ) : null}
    </>
  );
};
export default ScrollUp;
