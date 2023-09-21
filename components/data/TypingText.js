import React, { useState, useEffect, useRef } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 100; // Adjust typing speed as needed
  const textInterval = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    const startTyping = () => {
      textInterval.current = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(textInterval.current);
          setTimeout(() => {
            // Reset the display text and start typing again
            currentIndex = 0;
            setDisplayText("");
            startTyping();
          }, 500); // Adjust the delay before restarting typing
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(textInterval.current);
    };
  }, [text]);

  return (
    <div style={{ height: "50px" /* Adjust the height as needed */ }}>
      <span>{displayText}</span>
    </div>
  );
};

export default TypingText;
