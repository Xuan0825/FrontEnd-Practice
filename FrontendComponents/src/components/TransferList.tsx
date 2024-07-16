import { useState } from "react";
import CheckItem from "./CheckItem";
const leftDefault = [
  { title: "HTML", checked: false },
  { title: "JavaScript", checked: false },
  { title: "CSS", checked: false },
  { title: "TypeScript", checked: false },
];
const rightDefault = [
  { title: "React", checked: false },
  { title: "Angular", checked: false },
  { title: "Vue", checked: false },
  { title: "Svelte", checked: false },
];

export default function TransferList() {
  const [leftData, setLeftData] = useState(leftDefault);
  const [rightData, setRightData] = useState(rightDefault);

  const handleTransferAll = (current, next, setCurrent, setNext) => {
    const newNext = [...current, ...next];
    setCurrent([]);
    setNext(newNext);
  };
  const handleTransferSelected = (current, next, setCurrent, setNext) => {
    const selectcurrent = current.filter((item) => item.checked === true);
    const restCurrent = current.filter((item) => item.checked !== true);
    const newNext = [...next, ...selectcurrent];
    setNext(newNext);
    setCurrent(restCurrent);
  };

  return (
    <div>
      <div className="listContainer">
        <CheckItem currentgroup={leftData} setChange={setLeftData} />
        <div className="buttonContainer">
          <button
            onClick={() =>
              handleTransferAll(rightData, leftData, setRightData, setLeftData)
            }
          >
            {"<<"}
          </button>
          <button
            onClick={() =>
              handleTransferSelected(
                rightData,
                leftData,
                setRightData,
                setLeftData
              )
            }
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              handleTransferSelected(
                leftData,
                rightData,
                setLeftData,
                setRightData
              )
            }
          >
            {">"}
          </button>
          <button
            onClick={() =>
              handleTransferAll(leftData, rightData, setLeftData, setRightData)
            }
          >
            {">>"}
          </button>
        </div>
        <CheckItem currentgroup={rightData} setChange={setRightData} />
      </div>
    </div>
  );
}
