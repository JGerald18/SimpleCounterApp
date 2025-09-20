import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Todo List App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
