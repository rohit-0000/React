import React from 'react'
import './counter.css'
const counter = (props) => {
  return (
    <div id="counter-container">
        <p id="para">You Clicked {props.count} times</p>
        <button onClick={props.handleClick}> {props.text} </button>
        <span id="sp">{props.children}</span>
    </div>
  )
}

export default counter