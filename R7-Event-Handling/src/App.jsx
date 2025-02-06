import { useState } from 'react';
import './App.css'

function App() {

  const [text, setText] = useState('');
  function manageClick() {
    alert("Button is clicked 🙄🙄");
  }
  function manageChange(e) {
    setText(e.target.value);
  }
  function manageSubmit(e) {
    e.preventDefault();//it will stop default action after submit like page reload ,etc
    alert('submit kar du na ... 😗😗')
  }
  function manageMouseOver() {
    alert("hover on the the text 👍👍");
  }
  return (
    <div >
      <h1 id="topic-name">Event Handling</h1>
      <div id="container">
        <div id="click">
          <h1>OnClick Event</h1>
          <button onClick={manageClick}>Click Me</button>
        </div>

        <div id="change">
          <h1>OnChange Event</h1>
          <input placeholder='Eneter Something' onChange={manageChange}></input>
          <p>You have enter <i>{text}</i></p>
        </div>

        <div id="submit">
          <h1>onSubmit Event</h1>
          <form onSubmit={manageSubmit} id='submit-form'>
            <input placeholder='Enter Something' id="submit_input"></input>
            <button>Submit</button>
          </form>
        </div>

        <div id="mouseOver">
          <h1>OnMouseOver Event</h1>
          <span onMouseOver={manageMouseOver}> Hover on this box to Check onMouseOver Event </span>
        </div>
      </div>
      <div id="Notes">
        <h1>Note:-</h1>
        <ul type="disc">
          <li>e.stopPropagation();</li>
          <li>e.preventDefault();</li>
        </ul>
      </div>
    </div>
  )
}
 
export default App
