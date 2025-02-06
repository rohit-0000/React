import React from 'react'
import './LogInBtn.css'
const LogginBtn = (props) => {
  return (
    <div id='LogInContainer'>
        <button id="log-in" onClick={()=>{props.setLog(true)}}>Log in</button>
    </div>
  )
}

export default LogginBtn