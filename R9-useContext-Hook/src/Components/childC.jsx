import React, { useContext } from 'react'
import { userContext } from '../App'
import ChildD from './childD';
import './childC.css'
const childC = () => {
  const user = useContext(userContext);
  return (
    <div>
      <div id="C-container">
        <h1>Class C</h1>
        Name : {user.name}
      </div>
      <ChildD />
    </div>
  )
}

export default childC