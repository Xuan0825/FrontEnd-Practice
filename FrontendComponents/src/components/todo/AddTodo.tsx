import React, { useState } from "react";

export default function AddTodo({ todos, setTodos }) {
  const [newInput, setNewInput] = useState("");
  const handleAdd = () => {
    if (newInput.trim() === "") {
      alert("please enter value");
      return;
    }
    const newId = todos[todos.length - 1].id + 1;
    const newTodo = {
      id: newId,
      title: newInput,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setNewInput("");
  };

  return (
    <div>
      <input
        value={newInput}
        type="text"
        placeholder="Enter your todo title"
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
