import React from 'react'
import Counter from './Components/Counter';
import './App.css';
import TodoApp from './Components/TodoApp';


function App() {
  return (
    <div className='TodoApp'>
      <Counter/>
      <br></br>
      <TodoApp/>
    </div>
  )
}

export default App