import React, { useState } from "react";
import Star from "./Star";

export default function StartRating() {
  const starArray = new Array(7).fill(null);
  const [ratingIndex, setRatingIndex] = useState(0);
  const [clickedRate, setClickedRate] = useState(0);

  return (
    <div className="StarContainer">
      {starArray.map((item, index) => {
        return (
          <div key={index}>
            <Star
              index={index + 1}
              ratingIndex={ratingIndex}
              setRatingIndex={setRatingIndex}
              setClickedRate={setClickedRate}
              clickedRate={clickedRate}
            />
          </div>
        );
      })}
    </div>
  );
}
