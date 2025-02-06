import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './TimerComponents.css'
const TimerComponents = () => {
    const [second,setSecond]=useState(0);

    useEffect(() => {
        //setInterval runs a function repeatedly with a fixed delay between executions.

      const intervalId = setInterval(()=>{
        console.log("setInterval Executed");
        setSecond(prevSecond=>prevSecond+1);
      },1000); //here first render never complete
    
      return () => { // it will unmount when we remove TimerComponent from 
        console.log("Time to stop ");
        clearInterval(intervalId);
      }
    }, []);// variation 2 in App.jsx
    
  return (
    <div>
        <h1>Seconds: {second}</h1>
    </div>
  )
}

export default TimerComponents