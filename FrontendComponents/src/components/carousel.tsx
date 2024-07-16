import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.reddit.com/r/aww/top/.json?t=all"
        );
        if (response.ok) {
          const res = await response.json();
          setData(res.data.children);
        }
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const timeId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(timeId);
    };
  }, [data]);

  const handlePrev = () => {
    setCount((prevCount) => (prevCount - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % data.length);
  };

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <button onClick={handlePrev}>{"<"}</button>
          <img src={data[count].data.thumbnail} alt="Reddit Thumbnail" />
          <button onClick={handleNext}>{">"}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
