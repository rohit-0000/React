import React from "react";


const ChildComponent = React.memo((props) => {
    console.log("Child Component got Rerendered");
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
})

export default ChildComponent

//React.memo -> wrap ->Components -> Components re-render tabhi hogi t=jab props change honge 

//if you are sending a function then react.memo won't be able save you from re-rendering because function is also rerendering and looks like new function is passed

//so we use useCallback in that function passed it will freze the function untill dependencies is changes but rerender when dependency is changed

// with the help of useCallback we can stop recreation of function