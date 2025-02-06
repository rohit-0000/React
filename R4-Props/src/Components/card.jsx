import React from 'react'
import './card.css'
const card = (props) => {
  return (
    <div id="card-container">
        {props.children}
    </div>
  )
}

export default card