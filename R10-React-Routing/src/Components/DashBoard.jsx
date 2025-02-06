import React from 'react'
import { Outlet } from 'react-router-dom'
import Exam_NavBar from './Exam_NavBar'

const DashBoard = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
      <h1>I am in DashBoard page</h1>
      <Exam_NavBar/>

      {/* it is used to show nested route */}
      <Outlet/>
    </div>
    
  )
}

export default DashBoard