import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import AddTodo from "./AddTodo";

const data = [
  { id: 1, title: "todo1", isCompleted: false },
  { id: 2, title: "todo2", isCompleted: false },
  { id: 3, title: "todo3", isCompleted: false },
  { id: 4, title: "todo4", isCompleted: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setTimeout(() => {
          setTodos(data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleOnChange = (index) => {
    const newTodos = todos.map((item) => {
      if (index === item.id) {
        const newTodo = { ...item };
        newTodo.isCompleted = !item.isCompleted;
        return newTodo;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((item) => index !== item.id);

    setTodos(newTodos);
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <AddTodo todos={todos} setTodos={setTodos} />
          {todos.map((item) => {
            const { id, title, isCompleted } = item;
            return (
              <div key={id}>
                <p>Title: {title}</p>
                <CheckBox
                  isCompleted={isCompleted}
                  onChange={() => handleOnChange(id)}
                />
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
