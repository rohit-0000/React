
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] =useState(0);
  useEffect(() => {
    console.log("I will run on every Render")
  },)

  // let val=0; //here value will not change if reRender by any function

  //if value change in useRef, then no reRender will happen but by useState ReRender occurs
  let val=useRef(0); //here val is Persistant

  let ref=useRef();//creating reference
  function handleClick(){
    setCount(count+1);
    val.current=val.current+1;
    console.log("value of val : ",val.current);
  }
  function handleColorChange(){
    if(ref.current.style.backgroundColor =='red')
    ref.current.style.backgroundColor = '#242424';
    else ref.current.style.backgroundColor = 'red';
  }
  return (
    <div id="container">
      <p>Count : {count}</p>
      <p>value of val : {val.current}</p>
      <button ref={ref}  id="btn" onClick={handleClick}>Increment</button>
      <div id="color-change">
        <p>To change the color of avobe button Click here</p>
        <button onClick={handleColorChange}>Change color</button>
      </div>
    </div>
  )
}

export default App
