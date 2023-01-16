import React from 'react'

const button = ({color, text, click}) => {
  //this object is destructured, could also pass in props 
  return (
    <button style={{backgroundColor: color}} className = 'btn' onClick ={() => click}>{text}</button>
    // style accepts a JS object, reason for two brackets
  )
}

export default button