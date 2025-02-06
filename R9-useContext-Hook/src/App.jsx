import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/childA';
import ChildD from './Components/childD';

//step 1: create Context
const userContext=createContext();
//step 2: wrap all the chiild inside a provider
//step 3: pass value
//step 4: consumer k andar jaake consume karo


// theme change
const themeChange=createContext();

function App() {
  const [user,setUser] = useState({name:"Rohit"});

  const [theme,setTheme] = useState('dark');
  return (
    <div id="App-Container" style={{background: theme==='light'? "beige" : "black"}}>
      <div id="topic">
        <h1>UseContext</h1>
        <pre>
          App ├─ childA ├─ childB ├─ childC ├─ childD
        </pre>
      </div>
      <themeChange.Provider value={{theme,setTheme} }>
        <userContext.Provider value={user}>
          <ChildA/>
        </userContext.Provider>
        {/* <ChildD/> */}
      </themeChange.Provider>

    </div>
  )
}

export default App
export {userContext}
export {themeChange}
