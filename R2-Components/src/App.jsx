
import './App.css'
import UserCard from './Components/userCard'
import Rohit_img from './assets/rohit_img.jpg'
import Abhi_img from './assets/abhi_img.jpg'
import Vineet_img from './assets/vineet_img.jpg'
import Raja_img from './assets/raja_img.jpg'

function App() {

  return (
    <div id="Container">
      <UserCard name="Rohit" Desc="I am React developer" Img={Rohit_img}/>
      <UserCard name="Abhinav Anand" Desc="I am Full Stack Developer" Img={Abhi_img}/>
      <UserCard name="Vineet" Desc="I am Body Builder" Img={Vineet_img}/>

      <UserCard name="Raja Kunal" Desc="I am Student " Img={Raja_img}/>
      
    </div>
  )
}

export default App
