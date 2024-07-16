import React from "react";

export default function CheckItem({ currentgroup, setChange }) {
  const handleOnChange = (title, items) => {
    const newItems = items.map((item) => {
      if (item.title === title) {
        const newItem = { ...item };
        newItem.checked = !item.checked;
        return newItem;
      } else {
        return item;
      }
    });
    setChange(newItems);
  };

  return (
    <div className="list">
      {currentgroup &&
        currentgroup.map((item) => {
          const { title, checked } = item;
          return (
            <label key={title}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleOnChange(title, currentgroup)}
              />
              {title}
            </label>
          );
        })}
    </div>
  );
}
