import React, { useState } from "react";

const defaultArray = new Array(9).fill(null);

export default function TicTokToe() {
  const [array, setArray] = useState(defaultArray);
  const [nextPlayer, setNextPlayer] = useState("O");
  const handleOnClick = (id) => {
    if (array[id] !== null || calculateWinner(array)) {
      return;
    }
    const newArray = array.map((item, index) => {
      if (index === id) {
        return nextPlayer;
      } else {
        return item;
      }
    });
    setArray(newArray);
    setNextPlayer((pre) => (pre === "O" ? "X" : "O"));
  };

  const calculateWinner = (array) => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const items of winnerArray) {
      const [a, b, c] = items;
      if (array[a] !== null && array[a] === array[b] && array[a] === array[c]) {
        return true;
      }
    }
    return false;
  };

  const handleReset = () => {
    setArray(new Array(9).fill(null));
  };
  const fulFilled = array.every((item) => item !== null);
  return (
    <div className="ticTokSetting">
      <div className="settingBackgroud">
        <div className="newGridContainer">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                className="newGridItem"
                onClick={() => handleOnClick(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      {calculateWinner(array) || fulFilled ? null : (
        <div>Current Player: {nextPlayer}</div>
      )}
      <div>
        {calculateWinner(array)
          ? nextPlayer === "O"
            ? "Winner is X"
            : "Winner is O"
          : fulFilled
          ? "Draw Game"
          : "On Going"}
      </div>
    </div>
  );
}
