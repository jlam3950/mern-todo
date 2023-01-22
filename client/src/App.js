import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import List from './components/ List';
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [render, setRender] = useState(true);
  const [API, setAPI] = useState([{task:'no tasks'}])

const retreiveMongoData = async () => {
  let response = await fetch ('http://localhost:8000', {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data)
  setAPI(data)
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
    console.log('Task created')
  }).then(() => retreiveMongoData())
 }

 const deleteTaskMongo = (id) => {
  axios.delete(`http://localhost:8000/${id}`)
  .then(() => retreiveMongoData())
}

useEffect( () => {
  retreiveMongoData()
}, [])

  const toggleMongoTask = async (id, completed) => {
    axios.put(`http://localhost:8000/${id}`, {
      "completed": !completed
    }).then(response => {
      console.log(response)
      retreiveMongoData()
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
  // const completeTask = (id) => {
  //   console.log(API)
  //   setRender(!render)
  //   API.forEach(item => {
  //     if(id === item._id){
  //       item.completed = !item.completed
  //       }
  //     })
  // }

return (
    <div className="App">
        <Header/>
        <SearchBar addTaskMongo = {addTaskMongo}/>
        <List taskList = {API} setAPI = {setAPI} deleteTask = {deleteTaskMongo} completeTask = {toggleMongoTask}/>
        <Footer />
    </div>
  );
}

export default App;
