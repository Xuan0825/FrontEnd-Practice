import React, { useState } from "react";
import Draggable from "react-draggable";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Draggable>
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Front Content</h2>
            <p>This is the front of the card.</p>
          </div>
          <div className="flip-card-back">
            <h2>Back Content</h2>
            <p>This is the back of the card.</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
