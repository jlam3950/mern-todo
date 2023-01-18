import React from 'react'
import { useState } from 'react';
// import Button from './button'

const SearchBar = ({addTask}) => {
  
  const [text, setText] = useState('')

  const submitTask = (e, text) => { 
    e.preventDefault();
    if(text == ''){
      alert('Please, enter some text for your to-do list!')
    }
    addTask(text)
  }


  return (
    <>
    <div className ='searchBar'>
        <label> 
        Add Task:
            <input type = 'text' className = 'bar' onChange = {(e) => setText(e.target.value)}></input>
            {/* <Button type = 'button' color ={'Green'} text={'Add Task'} click ={hi}/> */}
            <button className = 'btn' type = 'button' onClick ={(e) => submitTask(e, text)} style={{backgroundColor: 'green'}}>Submit</button>
        </label>
    </div>
    </>)
  
}

export default SearchBar