import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
  const [text,setText]=useState('');
  let ct=1;
  return (
    <div id="main-container"> 
      <Card text={text} setText={setText} cardNo={ct}/>
      <Card text={text} setText={setText}/>
    </div>
  )
}

export default App
