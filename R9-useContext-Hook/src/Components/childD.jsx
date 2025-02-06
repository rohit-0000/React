import React, { useContext } from 'react'
import { themeChange } from '../App';
import './childD.css'

const childD = () => {
    const {theme,setTheme}=useContext(themeChange);
    function handleTheme(){
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
  return (
    <div id="D-container">
        <h1>Class D</h1>
        <button onClick={handleTheme} id="D-btn">
            Change Theme
        </button>
    </div>
  )
}

export default childD