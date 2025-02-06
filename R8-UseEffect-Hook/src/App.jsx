import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import LoggerComponents from './Components/LoggerComponents';
import TimerComponents from './Components/TimerComponents';
import DataFetcher from './Components/DataFetcher';
import ResizeComponent from './Components/ResizeComponent';
import MultiEffectComponent from './Components/MultiEffectComponent';

function App() {
  const [count,setCount]=useState(0);
  const [Sum,setSum]=useState(0);
  // function handleSum(){
  //   setSum(Sum+count);
  // }
  {/* function handleClick(){
    setCount(count+1);
  } */}
// Variation 1:- runs on each render
    {/* useEffect(() => {
      alert("i will run on each render");
    });*/}
  
//Variation 2: run only on first render
    {/* useEffect(() => {
      alert("I will run only on first render");
      
    }, [])*/}
  
//Vartion 3: run when dependency list is triggered
    {/* useEffect(() => {
      alert("I will run when count is updated");
    }, [count])*/}

//Vartion 4: run when any dependency list is triggered
    {/* useEffect(() => {
      alert("I will run when count/sum is updated");
    }, [count,Sum])*/}

//Variation 5: in this time we will add clean up function
    {/*useEffect(() => {
      alert("count is updated");
    
      return () => {
        alert("count is unmounted");
      }
    }, [count])*/}
  
  
  
  return (
    <div id="app-container">
      {/* <div class="container">
        <p id="ct">Count = {count}</p>
        <button onClick={handleClick} id="btn1">Click Me</button>
      </div>
      <div class="container">
        <p id="ct">Sum = {Sum}</p>
        <button onClick={handleSum} id="btn2">Click Me</button>
      </div> */}

      <LoggerComponents/>
      <ResizeComponent/>
      <TimerComponents/>
      <DataFetcher/>
      <MultiEffectComponent/>
    </div>
  )
}

export default App

{/*
  useEffect is hook in react which generate side effect
    first -> side effect function
    second -> clean up function 
    third -> comma separated dependency list
  
*/}