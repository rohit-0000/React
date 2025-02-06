import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComponent = () => {
    const {id}=useParams();
    
    return (
    <div>
        <h1>Params: <i>{id}</i></h1> 
        
        <div style={{backgroundColor: 'white', color:'black',padding:'10px 20px',borderRadius:'10px',marginTop:'30px'}}>
            {/* <br/> */}
            <h2>Note: </h2>
            <br />
                http://localhost:5173/student/abcd     //- route/url parameter<br/>
                http://localhost:5173/student=abcd   //- it is called query parameter
        </div>
    </div>
  )
}

export default ParamComponent