import React, { useEffect } from 'react';
import classes from '../../styles/customCursor.module.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(`.${classes.cursor}`);

    const updateCursor = (e) => {
      cursor.setAttribute(
        'style',
        `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`
      );
    };

    const clickEffect = () => {
      cursor.classList.add(`${classes.expand}`);
      setTimeout(() => {
        cursor.classList.remove(`${classes.expand}`);
      }, 500);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('click', clickEffect);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('click', clickEffect);
    };
  }, []);

  return <div className={classes.cursor}></div>;
};

export default CustomCursor;
