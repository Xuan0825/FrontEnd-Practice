import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../utils/useDebounce";

export default function AutoCompletor() {
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const debounceValue = useDebounce(input, 500);
  useEffect(() => {
    async function fetchSearch() {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/food/${input}`
        );
        if (response.ok) {
          const res = await response.json();
          setSearchData(res);
        } else {
          throw new Error("something wrong");
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (debounceValue) {
      fetchSearch();
    }
  }, [debounceValue]);

  const handleOnClick = (item) => {
    setList((pre) => [...pre, item]);
  };

  const handleOnDelete = (id) => {
    const newLists = list.filter((_, index) => index !== id);
    setList(newLists);
  };
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        {searchData.length > 0
          ? searchData.map((item, index) => {
              return (
                <div key={index} onClick={() => handleOnClick(item)}>
                  {item}
                </div>
              );
            })
          : input.length > 0
          ? "No such item in searching"
          : null}
      </div>
      <div>
        {list &&
          list.map((item, index) => {
            return (
              <div key={index}>
                <label>
                  <input type="checkbox" />
                  {item}
                </label>
                <button onClick={() => handleOnDelete(index)}>X</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
