import React from 'react'
import "./counter.css"
import { useState } from 'react'
const counter = () => {
  const [count,setCount]=useState(0);
  return (
    <div id="Container">
        <p>You clicked {count} times </p>
        <button onClick={ ()=>{ setCount(count+1) } }>Click me</button>
    </div>
  )
}

export default counter