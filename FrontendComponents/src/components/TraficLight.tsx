import React, { useEffect, useState } from "react";
import classNames from "classnames";

const config = {
  red: {
    light: "red",
    nextLight: "green",
    duration: 4000,
  },
  green: {
    light: "green",
    nextLight: "yellow",
    duration: 3000,
  },
  yellow: {
    light: "yellow",
    nextLight: "red",
    duration: 500,
  },
};
export default function TraficLight() {
  const [signal, setSignal] = useState("red");
  useEffect(() => {
    const { duration, nextLight } = config[signal];
    const timeId = setTimeout(() => {
      setSignal(nextLight);
    }, duration);
    return () => {
      clearTimeout(timeId);
    };
  }, [signal]);

  return (
    <div className="lightContainer">
      <div className={classNames("light", { red: signal === "red" })}></div>
      <div
        className={classNames("light", { yellow: signal === "yellow" })}
      ></div>
      <div className={classNames("light", { green: signal === "green" })}></div>
    </div>
  );
}
