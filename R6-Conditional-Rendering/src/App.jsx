import { useState } from 'react'
import './App.css'
import LogOutBtn from './Components/LogOutBtn';
import LogInBtn from './Components/LogInBtn';

function App() {
  const [login,setLog]=useState(true);

// if-else method
  // if(login){
  //   return(
  //     <div>
  //       <LogOutBtn setLog={setLog}/>
  //     </div>
  //   )
  // }
  // else{
  //   return(
  //     <div>
  //       <LogInBtn setLog={setLog}/>
  //     </div>
  //   )
  // }

// Ternary Operator
  // return(
  //   (login)? <LogOutBtn setLog={setLog}/> : <LogInBtn setLog={setLog}/>
  // )

// Logical operator and early return
  if(login===false){ {/*early return*/}
    return(
      <div>
        <LogInBtn setLog={setLog}/>
      </div>
    )
  }
  return(
    
    <div>
      {login && <LogOutBtn setLog={setLog}/>} {/* Logical Operator */}
    </div>
  )
}

export default App
