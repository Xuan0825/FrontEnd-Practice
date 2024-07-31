import React from "react";

export default function CheckBox({ isCompleted, onChange }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onChange} />
        Status: {isCompleted ? "Completed" : "inCompleted"}
      </label>
    </div>
  );
}
