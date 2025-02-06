import React from 'react'
import { NavLink } from 'react-router-dom'
import './Exam_NavBar.css'
const Exam_NavBar = () => {
  return (
    <div id="Exam-navbar-container">
        <ul type="none">
            <li>
                <NavLink to="courses" 
                className={({isActive})=>isActive? "isActiveExam":"Exam-nav-item" }>Cources</NavLink>
            </li>
            <li>
                <NavLink to="results" className={({isActive})=>isActive? "isActiveExam":"Exam-nav-item" }>Result</NavLink>
            </li>
            <li>
                <NavLink to="mock-tests" className={({isActive})=>isActive? "isActiveExam":"Exam-nav-item" }>Mock-Test</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Exam_NavBar