import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 0.1 * window.innerHeight;

      setIsVisible(scrollY > scrollThreshold);
    };

    const debouncedHandleScroll = debounce(handleScroll, 200);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px', 
        right: '20px', 
      }}
    >
      <button
        style={{
          width: '55px',
          border: '2px solid #FFFFFF',
          height: '40px',
          borderRadius: '5px',
          color: '#01D279',
          fontSize: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaArrowCircleUp />
      </button>
    </div>
  );
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default ScrollToTopButton;
