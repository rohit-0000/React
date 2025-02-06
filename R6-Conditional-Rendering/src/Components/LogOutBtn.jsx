import React from 'react'
import './LogOutBtn.css'
const LogOutBtn = (props) => {
  return (
    <div id="LogOutContainer">
        <button id="log-out" onClick={()=>{props.setLog(false)}}>
            Log Out
        </button>
    </div>
  )
}

export default LogOutBtn