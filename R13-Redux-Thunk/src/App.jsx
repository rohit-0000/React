import './App.css'
import {fetchTodos} from'./Redux/Slice/Todo'
import {useDispatch,useSelector} from'react-redux'
function App() {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
  console.log('state',state);

  if(state.Todo.isLoading){
    return <h1>Loading....</h1>
  }
  function manageClick(){
    dispatch(fetchTodos());
  }


  return (
    <div id="container">
      <button id='fetch-button' onClick={manageClick}>Fetch</button>
      <div id="lst">
        {state.Todo.data!=null && state.Todo.data.map((e)=><li >{e.title}</li>)}
      </div>
    </div>
  )
}

export default App
