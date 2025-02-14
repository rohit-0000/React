import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './Components/ChildComponent';
import ExpensiveComponent from './Components/ExpensiveComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick=useCallback(()=>{
    setCount(count+1);
  },[count]);  
  //if [] is given i.e function is frezzed
  //if [count] is given then function is frezzed until count changed

  return (
    <div id="container">
      {/* <p>count: {count}</p>
      <button onClick={handleClick}>
        Increment
      </button>

      <div>
        <ChildComponent buttonName="Click Me" handleClick={handleClick}/>
      </div> */}


      {/* ------------------------------------- */}

      <ExpensiveComponent/>
    </div>
  )
}

export default App
