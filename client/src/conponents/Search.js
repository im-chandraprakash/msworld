import React from 'react'
import './Search.css'

function Search() {
  return (
      <div className="search-container">
          <h1>Hello, What Do you Want to Learn?</h1>

          <div className="search-box">
              <div className="search">
                  <form action="#">
                      <input
                          className="input-box"
                          type="text"
                          placeholder="Search Courses"
                          name="search"
                      />
                      <button>search</button>
                  </form>
              </div>
              <div className="courses">
                  <button className="course-btn">Data Scientist</button>
                  <button className="course-btn">Data Structure</button>
                  <button className="course-btn">machine learning </button>
              </div>
          </div>
      </div>
  );
}

export default Search