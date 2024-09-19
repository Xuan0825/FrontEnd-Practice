import { useState } from "react";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectDate, setSelectDate] = useState(-1);

  // const getDaysInMonth = (month, year) => {
  //   return new Date(year, month + 1, 0).getDate();
  // };

  const handleDateSelect = (value: string) => {
    if (value === "prev") {
      if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear((pre) => pre - 1);
      } else {
        setCurrentMonth((pre) => pre - 1);
      }
    }
    if (value === "next") {
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear((pre) => pre + 1);
      } else {
        setCurrentMonth((pre) => pre + 1);
      }
    }
  };

  const getDaysInMonth = () => {
    console.log(new Date(currentYear, currentMonth, 0).getDate());
    return new Date(currentYear, currentMonth, 0).getDate();
  };

  const handleSelect = (index: number) => {
    setSelectDate(index);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => handleDateSelect("prev")}>{"<"}</button>
        {`${currentYear}-${currentMonth}`}
        <button onClick={() => handleDateSelect("next")}>{">"}</button>
      </div>
      <div className="calendar-grid">
        {new Array(getDaysInMonth()).fill(0).map((_, index) => (
          <div
            key={index}
            className={`calendar-day ${
              selectDate === index ? "selected-day" : ""
            }`}
            onClick={() => handleSelect(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
