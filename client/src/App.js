import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import List from './components/ List';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [render, setRender] = useState(true);
  const [API, setAPI] = useState([{task:'no tasks'}])

const retreiveMongoData = async () => {
  let response = await fetch ('http://localhost:8000', {
    method: 'GET',
  });
  const data = await response.json();
  setAPI(data)
  console.log(API)
}
  //another syntax would be
  //axios.get('http://localhost:8000').then((response) => response.json()).then((response.json()) => setAPI(response.json()))
  // can also use const random = fetch(url, etc)
  //can use the res.json() to reduce length 

 const addTaskMongo = (task,id) => { 
  axios.post('http://localhost:8000',{
    "task": task,
    "id": id, 
    // you do not have to add own id, used _id instead
    "completed": false, 
  }).then((response) => {
    alert('Task created')
  }).then(() => retreiveMongoData())
 }

 const deleteTaskMongo = (id) => {
  axios.delete(`http://localhost:8000/${id}`)
  .then(() => setRender(!render))
}

useEffect( () => {
  retreiveMongoData()
}, [])

  const completeTask = (id) => {
    setRender(!render)
    API.forEach(item => {
      if(id === item.id){
        item.completed = !item.completed
        }
      })
  }

  const toggleMongotask = async (id, item) => {
    setRender(!render); 
    axios.put(`http://localhost:8000${id}`, {
       completed: !item.completed
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  

  // const addTask = (text) => {
  //   setAPI([...API, {
  //     task: text, 
  //     completed: false,
  //     id: Math.floor(Math.random() * 1000),
  //   }])
  //   console.log(API)
  // }

  // const deleteTask = (id) => {
  //   setAPI(API.filter(item => item.id !== id))
  // }

  
return (
    <div className="App">
        <Header/>
        <SearchBar addTaskMongo = {addTaskMongo}/>
        <List taskList = {API} setAPI = {setAPI} deleteTask = {deleteTaskMongo} completeTask = {completeTask}/>
    </div>
  );
}

export default App;
