import React, { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import classes from "../../styles/back-to-top.module.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      // Clear existing timeout to debounce
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        if (window.scrollY > window.innerHeight * 0.25) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 100); // 100ms debounce
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${classes.backToTop} ${isVisible ? classes.show : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      type="button"
    >
      <RiArrowUpLine size={24} />
    </button>
  );
};

export default BackToTop;
