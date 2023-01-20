import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const List = ({taskList, setAPI,  deleteTask, completeTask}) => {

  return (
    <div className = 'list_container'>

        <div className = 'list'>
            {taskList.map((item) => (
                 <div key={Math.floor(Math.random() * 100)} className ='list_item' onClick = {() =>completeTask(item.id)}>
                    {/* {item.task} */}
                    {item.completed ? <div style = {{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {item.task}</div> : <>{item.task}</>}
                    {item.completed ? <FaTimes className ='icon'style ={{color: 'red'}} onClick = {() => deleteTask(item.id)} /> : ''}
                 </div>
            ))}
        </div>

    </div>
  )
}

export default List