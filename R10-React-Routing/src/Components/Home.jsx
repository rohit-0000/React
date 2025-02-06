import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [input,setInput]=useState('');


  const navigate=useNavigate();//useNavigate hook
  function handleClick(){
    navigate('/student/'+input)
  }

  return (
    <div id='HomeContainer'>
      <h1>I am in Home Page</h1>

      <div id='paramsContainer'>
        <h2>Route Paramter(useParams)</h2>
        <div id="useParams">
          <input placeholder='Enter id for Route Parameter' onChange={(e)=>{setInput(e.target.value)}} ></input>
          <button onClick={handleClick}>Click me</button>
        </div>
        <h4>Click on button to navigate to ParamComponent</h4>
      </div>
    </div>    
  )
}

export default Home