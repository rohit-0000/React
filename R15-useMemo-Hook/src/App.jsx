import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState(0);
  function ExpensiveTask(val){
    console.log("I am in the ExpensiveTask")
    for(let i=1;i<1000000000;i++){}
    return val*2;
  }

  // useMemo(() => first, [second]) in first Expensive function, second change 
  let val=useMemo(()=>ExpensiveTask(input),[input]);
  
  return (
    <div id="container">
      <p id="val">Count: {count}</p>
      <button id="btn"onClick={()=>setCount(count+1)}>Increment</button>

      <input
      id='input'
      type='number'
      placeholder='Enter number'
      onChange={(e)=>setInput(e.target.value)}/>
      <p id="ip-val">2*{input}={val}</p>
    </div>
  )
}

export default App
