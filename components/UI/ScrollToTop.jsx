import { useState, useEffect } from 'react';
// import './styles/scrolltotop.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional smooth scrolling animation
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        Return to Top

      </button>
    )
  );
}

export default ScrollToTopButton;
