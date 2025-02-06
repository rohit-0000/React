import React from 'react'
// import user_img from '../assets/user_img.jpg'
import './userCard.css'

const userCard = (props) => {
  return (
    <div className='user'>
        <h1 className='user-name'> {props.name} </h1>
        <img id="user-img" src={props.Img} alt="user image" />
        <p id="Desc">{props.Desc} </p>
    </div>
  )
}

export default userCard