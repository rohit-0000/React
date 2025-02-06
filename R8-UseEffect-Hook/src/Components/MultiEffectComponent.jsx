import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './MultiEffectComponent.css'
const MultiEffectComponent = () => {
    const [count,setCount]=useState(0);
    const [second,setSecond]=useState(0);

    useEffect(()=>{
        console.log('Count changed:',count);
    },[count]);//run when count is updated

    useEffect(() => {
        const intervalId=setInterval(()=>{
            setSecond(prevSecond=>prevSecond+1);
        },1000);
      return () => {
        clearInterval(intervalId);
      }
    }, [])//runs on 1st render
    
  return (
    <div id="multi-container">
      <div id="count">
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
      </div>
        <h2>Seconds: {second}</h2>
    </div>
  )
}

export default MultiEffectComponent