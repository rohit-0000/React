import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[sec_time,setSec_time]=useState(0);
  const[min_time,setMin_time]=useState(0);
  const[hr_time,setHr_time]=useState(0);

  let timeRef= useRef(null);

  function startTimer(){
    timeRef.current=setInterval(()=>{
      setSec_time((sec_time)=>sec_time+1);
    },1000);
  }

  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }

  function resetTimer(){
    stopTimer();
    setSec_time(0);
    setMin_time(0);
    setHr_time(0);
  }
  if(sec_time==60){
    setMin_time((min_time)=>min_time+1);
    setSec_time(0);
  }
  if(min_time==60){
    setHr_time((hr_time)=>hr_time+1);
    setMin_time(0);
  }

  function fcn(value){
    if(value<=9) return '0'+value;
    else return value;
  }
  return (
    <div id='stopwatch'>
      <h1 id="heading">StopWatch</h1>
      <p id="val">{fcn(hr_time)}<span>h</span> : {fcn(min_time)}<span>m</span> : {fcn(sec_time)}<span>s</span></p>
      {/* <p id="unit">Hr  Min  Sec</p> */}
      <p></p>
      <div id='btn'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default App
