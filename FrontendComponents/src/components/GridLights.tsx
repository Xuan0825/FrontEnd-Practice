import { useEffect, useState } from "react";

const check = new Array(9).fill("none");

export default function GridLights() {
  const [grid, setGrid] = useState(check);
  const [order, setOrder] = useState([]);
  const [deactive, setDeactive] = useState("false");

  const handleOnClick = (id: number) => {
    if (grid[id] === "green" || deactive === "true") {
      return;
    }
    const newGrid = grid.map((item, index) => (index === id ? "green" : item));
    setGrid(newGrid);
    setOrder((prevOrder) => [...prevOrder, id]);
  };

  useEffect(() => {
    if (order.length === 8) {
      setDeactive("true");
      const intervalId = setInterval(() => {
        setOrder((prevOrder) => {
          if (prevOrder.length === 0) {
            clearInterval(intervalId);
            setDeactive("false");
            return prevOrder;
          }
          const newOrder = [...prevOrder];
          const last = newOrder.pop();
          setGrid((prevGrid) =>
            prevGrid.map((item, index) => (index === last ? "white" : item))
          );
          return newOrder;
        });
      }, 300);
    }
  }, [order.length === 8]);

  return (
    <div className="gridContainer">
      {grid.map((item, index) => {
        if (index === 4) {
          return <div className="emptyGridItem" key={index}></div>;
        }
        return (
          <div
            style={{ backgroundColor: item }}
            className="gridItem"
            key={index}
            onClick={() => handleOnClick(index)}
          ></div>
        );
      })}
    </div>
  );
}
