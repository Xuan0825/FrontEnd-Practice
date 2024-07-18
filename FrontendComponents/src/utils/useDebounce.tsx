import React, { useEffect, useState } from "react";

export default function useDebounce(input, wait) {
  const [searchTerm, setSearchTerm] = useState(input);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setSearchTerm(input);
    }, wait);
    return () => {
      clearTimeout(timeId);
    };
  }, [input, wait]);
  return searchTerm;
}
