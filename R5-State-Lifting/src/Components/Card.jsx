import React from 'react'
import './card.css'
const Card1 = (props) => {
  return (
    <div id="card-container">
      <h1 id="cardNo">Card {props.cardNo}</h1>
      <div id="input-area">
        <p>Name :</p>
        <input placeholder='Enter Name' type='text' onChange={(e) => props.setText(e.target.value)} value={props.text}></input>
      </div>
      <p id="Ref">Your Name is <i>{props.text}</i></p>

    </div>
  )
}

export default Card1