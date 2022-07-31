
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";


function NavBar() {

    const [showForm, setShowForm]= useState(false)
    function handleClick(){
        setShowForm(showForm=>!showForm)
    }
    return (
      <div className="nb">
      <ul >
      
      <li><NavLink to="/about" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} > About Us </NavLink></li>
      <li><NavLink to="/contact" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} > Contact Us</NavLink></li>
      <li><NavLink to="/" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '3px'
            })} >Home </NavLink></li>
     

      <h3>SPORTS TODAY</h3>
      <div>
       <button onClick={() => setShowForm(prev => !prev)}>Login</button>
        
        {showForm && <Login/>}
        
        </div>
        
        </ul>
      </div>
    );
  }
  
  export default NavBar;