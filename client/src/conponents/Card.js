import React from 'react'
import './Card.css'
function Card() {
  return (
      <div className="card-container">
         <a href="/Dsa"className='subject-name'>Data Structure & Algorithm</a>
        
          <h3 className='topic-name'>Introduction to DSA</h3>
          <p className='topic-intro'>
              Data structure and Algorithm (DSA) is applied in all disciplines
              of software development. DSA is the building block of the software
              development process.
          </p>
      </div>
  );
}

export default Card;