import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Signup.scss';
import { useState } from 'react';
import { axiosClient } from '../../utils/axiosClient';
// import {Login} from '../login/Login.js';

function Signup() {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();


    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await axiosClient.post("/auth/signup",{
                name,
                email,
                password,
            })
            console.log(response);
        } catch (error) {           
        }
     }


  return (
      <div className="signup">
          <div className="signup-box">
              <h2 className="heading">Signup</h2>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      className="name"
                      onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      className="email"
                      onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      id="password"
                      className="password"
                      onChange={(e) => setPassword(e.target.value)}
                  />

                  <input type="submit" className="submit" />
              </form>

              <p className="subheading">
                  Already have an an account <Link to="/login">Log in</Link>{" "}
              </p>
          </div>
      </div>
  );
}

export default Signup