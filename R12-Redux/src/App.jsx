import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Reset, decrement, increment, incrementByAmount } from './Features/Counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const count =useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(Reset());
  }
  function handleAmountSubmit(){
    dispatch((incrementByAmount(Number(amount))));
  }
  return (
    <div className='Container'>
      <h1>React Redux</h1>
      <button id="inc" onClick={handleIncrement}>+</button>
      <p id='count'>Count: {count}</p>
      <button id="dec" onClick={handleDecrement}>-</button>
      <div>
        <input id='input' placeholder='Enter Amout' onChange={(e)=>setAmount(e.target.value)}/>
        <button id='input-submit' onClick={handleAmountSubmit}>Submit</button>
      </div>
      <button id='clear' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App


//Async Thunk :- for async code like fetching api