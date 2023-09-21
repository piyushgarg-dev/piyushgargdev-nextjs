import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 100; // Adjust typing speed as needed
  const containerHeight = "60px"; // Adjust the height as needed

  useEffect(() => {
    const textLength = text.length;

    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward

    const updateText = () => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex += direction;

      if (currentIndex === textLength + 1) {
        direction = -1; // Change direction to backward
        setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex += direction;
        }, 1000); // Pause before typing backward
      }

      if (currentIndex === -1) {
        direction = 1; // Change direction to forward
        currentIndex = 0;
      }
    };

    const textInterval = setInterval(updateText, typingSpeed);

    return () => {
      clearInterval(textInterval);
    };
  }, [text]);

  return (
    <div style={{ height: containerHeight }}>
      <span>{displayText}</span>
    </div>
  );
};

export default TypingText;
