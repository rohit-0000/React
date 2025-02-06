import React from 'react'
import { useEffect,useState } from 'react';
import './LoggerComponents.css'
const LoggerComponents = () => {
  const [count,setCount]=useState(0);
  useEffect(() => {
    console.log('Component rendered or count chabged:',count);
  })
  
  return (
    <div id="logger">
      <h1>Count : {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>
    </div>
  )
}

export default LoggerComponents