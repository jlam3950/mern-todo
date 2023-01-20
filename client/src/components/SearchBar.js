import React from 'react'
import { useState } from 'react';
// import Button from './button'

const SearchBar = ({addTask, addTaskMongo}) => {
  
  // const [text, setText] = useState('')
  const [task, setTask] = useState('')
  const id = Math.floor(Math.random * 1000)

  const submitTask = (e, task) => { 
    e.preventDefault();
    if(task === ''){
      alert('Please, enter some text for your to-do list!')
    }
    console.log(task)
    addTaskMongo(task,id)
  }


  return (
    <>
    <div className ='searchBar'>
        <label> 
        Add Task:
            {/* <input type = 'text' className = 'bar' onChange = {(e) => setText(e.target.value)}></input> */}
            <input type = 'text' className = 'bar' onChange = {(e) => setTask(e.target.value)}></input>
            {/* <Button type = 'button' color ={'Green'} text={'Add Task'} click ={hi}/> */}
            <button className = 'btn' type = 'button' onClick ={(e) => submitTask(e, task)} style={{backgroundColor: 'green'}}>Submit</button>
        </label>
    </div>
    </>)
  
}

export default SearchBar