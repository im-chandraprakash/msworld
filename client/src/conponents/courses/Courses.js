import React from 'react';
import Card from '../Card';
import './Courses.css';

function Courses() {

  return (
    <div className='course-container'>
         <div className='card-courses'>
            <Card/>
            <Card/>
            <Card/>
         </div>
    </div>
  )
}

export default Courses