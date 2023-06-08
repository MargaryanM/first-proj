import React, { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (value) => {
    setValue(value);
  };

  const addTodo = () => {
    const todoItem = {
      key: todos,
      done: true,
      text: value,
    };
    setTodos([...todos, todoItem]);
    setValue("");
  };

  return (
    <div className="Container">
      <div className="ContItems">
        <input onChange={(e) => handleChange(e.target.value)} value={value} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="TodoText">
        <div>
          {todos.map((todoItem) => {
            return <div key={todoItem.key}>{todoItem.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
