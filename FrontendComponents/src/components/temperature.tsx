import { useState } from "react";

export default function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("null");
  const handleCelsius = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setCelsius("");
      setFahrenheit("");
    } else {
      const celsiusValue = parseFloat(inputValue);
      if (!isNaN(celsiusValue)) {
        setCelsius(inputValue);
        setFahrenheit((celsiusValue * 1.8 + 32).toFixed(2));
      } else {
        setFahrenheit("");
      }
    }
  };

  const handleFahrenheit = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setFahrenheit("");
      setCelsius("");
    } else {
      const fahrenheitValue = parseFloat(inputValue);
      if (!isNaN(fahrenheitValue)) {
        setFahrenheit(inputValue);
        setCelsius(((fahrenheitValue - 32) / 1.8).toFixed(2));
      } else {
        setCelsius("");
      }
    }
  };
  return (
    <div>
      <div className="temperatureContainer">
        <div>
          <input type="number" value={celsius} onChange={handleCelsius} />
          <h4>Celsius</h4>
        </div>
        <div>=</div>
        <div>
          <input type="number" value={fahrenheit} onChange={handleFahrenheit} />
          <h4>Fahrenheit</h4>
        </div>
      </div>
    </div>
  );
}
