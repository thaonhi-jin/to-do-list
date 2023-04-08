import './App.css';
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  
  function getItem(item){
    setTodo((prevState) => {
      return [...prevState, item]
    });
  }
  function setCompleted(id){
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="todo">
      <AddTodo getItem = {getItem}/>
      {todo && todo.map((item, index) => (
        <TodoItem item = {item} id = {index} completed={setCompleted}/>
      ))}
    </div>
  );
}

export default App;
