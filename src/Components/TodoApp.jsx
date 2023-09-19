import React, { useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const update = (ind) => {
    const update = prompt("Enter a Updated Item");
    let list = [...todoList];
    list[ind] = update;
    setTodoList(list);
  };

  const Delete = (ind) => {
    let array = [...todoList];
    array.splice(ind, 1);
    setTodoList(array);
  };

  const addTask = () => {
    setTodoList([...todoList, task]);
    setTask(""); // Clear the input field
  };

  return (
    <div>
      <h1
        style={{
          color: "black",
          fontWeight: "bolder",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Todo App
      </h1>
      <input
        type="text"
        style={{ padding: "6px"}}
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button
        onClick={addTask}
        type="button"
        className="btn btn-primary"
        style={{ padding: "9px" }}
    
      >
        Add New task
      </button>

      {todoList.map((value, index) => {
        return (
          <li key={index}>
            {value}

            <button
              type="button"
              class="btn btn-secondary"
              style={{ margin: "10px" }}
              onClick={() => update(index)}
            >
              update
            </button>

            <button
              type="button"
              className="btn btn-dark"
              onClick={() => Delete(index)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default TodoApp;
