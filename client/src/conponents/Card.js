import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
function Card() {
  return (
      <div className="card-container">
          <Link to="/Dsa" className="subject-name">
              Data Structure & Algorithm
          </Link>

          <h3 className="topic-name">Introduction to DSA</h3>
          <p className="topic-intro">
              Data structure and Algorithm (DSA) is applied in all disciplines
              of software development. DSA is the building block of the software
              development process.
          </p>
      </div>
  );
}

export default Card;