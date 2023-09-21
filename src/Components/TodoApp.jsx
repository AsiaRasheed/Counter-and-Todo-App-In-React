import React, { useState } from 'react';
import './TodoApp.css'; 

function TodoApp() {
  const [todolist, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodoList([...todolist, task]);
      setTask('');
    }
  };

  const edit = (index) => {
    const update = prompt('Enter the new task');
    if (update !== null) {
      const arr = [...todolist];
      arr[index] = update;
      setTodoList(arr);
    }
  };

  const del = (index) => {
    const arr = [...todolist];
    arr.splice(index, 1);
    setTodoList(arr);
  };

  return (
    <div className='container'>
      <div className="centered-content">
        <h1>Todo App</h1>
        <div className="input-container">
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task..." />
          <button className='btn btn-success' onClick={addTask} disabled={task.trim() === ''}>
            Add Task
          </button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todolist.map((value, index) => (
              <tr key={index}>
                <td>{value}</td>
                <td>
                  <button className='btn btn-primary m-1' onClick={() => edit(index)}>Edit</button>
                  <button className='btn btn-danger m-1' onClick={() => del(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoApp;




















