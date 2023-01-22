import React from 'react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
// import Button from './button'

const SearchBar = ({addTask, addTaskMongo}) => {
  
  // const [text, setText] = useState('')
  const [task, setTask] = useState('')
  const id = Math.floor(Math.random() * 1000)

  const submitTask = (e, task) => { 
    e.preventDefault();
    if(task === ''){
      alert('Please, enter some text for your to-do list!')
    } else if (task !== ''){
      console.log(task)
      addTaskMongo(task,id)
      setTask('')
    }
  }


  return (
    <>
    <div className ='searchBar'>
        <label> 
            {/* <input type = 'text' className = 'bar' onChange = {(e) => setText(e.target.value)}></input> */}
            <input type = 'text' className = 'bar' value = {task} placeholder = 'Add new item...' onChange = {(e) => setTask(e.target.value)}></input>
            {/* <Button type = 'button' color ={'Green'} text={'Add Task'} click ={hi}/> */}
            <button className = 'btn' type = 'button' onClick ={(e) => submitTask(e, task)}><FaPlus /></button>
            
        </label>
    </div>
    </>)
  
}

export default SearchBar