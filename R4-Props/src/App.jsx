import { useState } from 'react'
import './App.css'
import Card from './Components/card.jsx'
import Counter from './Components/counter.jsx'
function App() {

  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div id="app-container">
      <Card>
        <h1> Hello Guys </h1>
        <p> I am Learning React</p>
        <p id="card-para">In this, I learned about props and how to pass children.</p>
      </Card>

      <Counter handleClick={handleClick} text="Click Me" count={count}>
      <p>In this, I learned about props and how to pass children.</p>
      </Counter>
    </div>
  )
}

export default App
