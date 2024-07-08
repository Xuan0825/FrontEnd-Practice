import React, { useEffect, useState } from "react";

export default function DigtalClock() {
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const getTwoDigit = (number: number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };
  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div className="outer">
      <div className="clockContainer">
        <div className="time">{getTwoDigit(hour)}</div>
        <div className="signal">:</div>
        <div className="time">{getTwoDigit(minute)}</div>
        <div className="signal">:</div>
        <div className="time">{getTwoDigit(second)}</div>
      </div>
    </div>
  );
}
