import React, {useState} from 'react';
import Todos from './components/Todos';

import './App.css';


function App() {
 const myList = [
   {
     id: 1,
     title: "Feed the dog",
     completed: false
   },
   {
    id: 2,
    title: "Make dinner",
    completed: false
  },
  {
    id: 3,
    title: "Meet with Boss",
    completed: false
  }
 ];
 const [todos, setTodos] = useState(myList);
  
  return (
    <div className="App">
      <h1>Hello from the app.js</h1>
      <Todos/>
    </div>
  );
}

export default App;
