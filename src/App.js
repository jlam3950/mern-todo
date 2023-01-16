import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import List from './components/ List';
import { useState } from 'react';

function App() {
  const [render, setRender] = useState(true);
  const [dummyAPI, setAPI] = useState(
      [
        {task:'run',
         date: '1/1/23',
         completed: false,
         id: 1,
         },
        {task:'chainsaw man',
         completed: false,
        id: 2,
      },
        {task:'lounge',
         completed: false,
         id: 3,
      },
      ]
    )

  const addTask = (text) => {
    setAPI([...dummyAPI, {
      task: text, 
      completed: false,
      id: Math.floor(Math.random() * 1000),
    }])
    console.log(dummyAPI)
  }

  const deleteTask = (id) => {
    setAPI(dummyAPI.filter(item => item.id !== id))
  }

  const completeTask = (id) => {
    setRender(!render)
    console.log(dummyAPI)
    dummyAPI.forEach(item => {
      if(id === item.id){
        item.completed = !item.completed
        }
      })
  }
  
  return (
    <div className="App">
        <Header/>
        <SearchBar addTask = {addTask}/>
        <List taskList = {dummyAPI} setAPI = {setAPI} deleteTask = {deleteTask} completeTask = {completeTask}/>
    </div>
  );
}

export default App;
