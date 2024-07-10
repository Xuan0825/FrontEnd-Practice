import React, { useEffect, useState } from "react";
import { fetchSixData, fetchjobID } from "../utils/fetchJob";

export default function JobBoard() {
  const [idArray, setIdArray] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetch() {
      try {
        const res = await fetchjobID();
        setIdArray(res);
        const array = res.slice(0, 5);
        const dataResult = await fetchSixData(array);
        if (dataResult) {
          setData(dataResult);
          setCount((pre) => pre + array.length);
        } else {
          throw new Error("fetchDatawith Id has issue");
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  const handleLoadMore = async () => {
    try {
      const newFetchIdArray = idArray.slice(count, count + 5);
      const response = await fetchSixData(newFetchIdArray);
      if (response) {
        setData((pre) => [...pre, ...response]);
        setCount((pre) => pre + newFetchIdArray.length);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3 style={{ color: "darkorange" }}>Hacker News Jobs Board</h3>
      <div>
        {data &&
          data.map((item) => {
            const { id, title, by, time, url } = item;
            return (
              <div key={id}>
                <a rel="link" href={url} target="_blank">
                  {title}
                </a>
                <div>by: {by}</div>
                <div>Date:{time}</div>
              </div>
            );
          })}
        {count === idArray.length ? null : (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
}
