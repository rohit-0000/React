import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import DashBoard from './Components/DashBoard'
import NavBar from './Components/NavBar'
import ParamComponent from './Components/ParamComponent'
import Courses from './Components/Courses'
import Mock_test from './Components/Mock_test'
import Result from './Components/Result'
import Exam_NavBar from './Components/Exam_NavBar'
import Not_found from './Components/Not_found'


const router = createBrowserRouter(
  [
    {
      path: '',
      element: 
      <div>
        <NavBar/>
        <Home/>
      </div>
    }, 
    
    {
      path: '/About',
      element: 
      <div>
        <NavBar/>
        <About/>
      </div>
    }, 
    
    {
      path: '/Dashboard',
      element: 
      <div>
        <NavBar/>
        <DashBoard/>
      </div>,
      // Nesting
      children:[
        {
          path:'courses',
          element:
          <div >
            <Courses/>
          </div>
        },
        {
          path:'mock-tests',
          element:
          <div>
            <Mock_test/>
          </div>
        },
        {
          path:'results',
          element:
          <div>
            <Result/>
          </div>
        },
      ]
    },

    {
      path: '/student/:id', //route paramter
      element: 
      <div>
        <NavBar/>
        <ParamComponent/>
      </div>
    },

    {
      path:'*',
      element:<Not_found/>
    }

    
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
      {/* <NavBar/> //when we are using ancher tag */}
    </div>

  )
}

export default App
