import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {

    const [text,setText]=useState("");
    const [count,setCount]=useState(0);
    const prevFunction=useRef(null);
    const expensiveCalculation= useCallback(()=>{

        console.log("Running Expensive function ...");
        let result=0;
        for(let i=0;i<10000000;i++){
            result+=i;
        }
        return result;
    },[count]) //by using useCallback we can stop recreation of function and do not stop from running ,running is stoped by useMemo

    useEffect(() => {
      if(prevFunction.current){
        if(prevFunction.current!=expensiveCalculation){
            console.log("function got re-created"); //this will only print when count update because expensive function is frezzed until count do not changes 
        }
      }
      else{
        prevFunction.current=expensiveCalculation;
      }
    
    }, [expensiveCalculation]);
    

  return (
    <div>
        <input type='text'
        onChange={(e)=>setText(e.target.value)}
        placeholder='Type SomeThing'
        />

        <p>Expensive Calculation Results: {expensiveCalculation()}</p>
        <button onClick={()=>setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default ExpensiveComponent