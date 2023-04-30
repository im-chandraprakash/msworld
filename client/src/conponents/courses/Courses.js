import React from 'react';
import Subcard from "../Subcard";
import './Courses.css';

function Courses() {

  return (
    <div className='course-container'>
         <div className='card-courses'>
            <Subcard/>
            <Subcard/>
            <Subcard/>
         </div>
    </div>
  )
}

export default Courses