// src/components/SplitText.jsx
import React from "react";
import '../index.css';

const SplitText = ({ text, className }) => {
  return (
    <span aria-label={text} role="heading">
      {text.split("").map((char, index) => {
        const isSpace = char === " ";
        let style = { animationDelay: `${0.5 + index / 10}s` };

        return (
          <span
            aria-hidden="true"
            key={index}
            className={`${className} ${isSpace ? "space-char" : ""}`}
            style={style}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
