// import React, {useState} from "react";
// import Login from "./Login";

// function NavBar(){
//     const [showForm, setShowForm]= useState(false)
//     function handleClick(){
//         setShowForm(showForm=>!showForm
//     }
//     return(
// <div className="navbar">
//     <ul>  
//         <li><button>About Us</button></li>
//         <li><button>Contact Us</button></li>
//         <li><button>Home</button></li>       
//        <button onClick={handleClick}>{showForm ? "Close":"Login" }</button> <h3>SPORTS TODAY</h3>
//        {showForm ? <Login /> : null}     
//     </ul>
// </div>
//     )
// }
// export default NavBar;
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
      <ul>
      
      <li><NavLink to="/about" > About Us </NavLink></li>
      <li><NavLink to="/contact" > Contact Us</NavLink></li>
      <li><NavLink to="/" >Home </NavLink></li>
      <li><NavLink to="/post" > Post </NavLink></li>

      <h3>SPORTS TODAY</h3>
      <li><NavLink to="/login" >  <button onClick={() => setShowForm(prev => !prev)}>Login</button>
        </NavLink></li>
        {showForm && <Login/>}
        
        
        
        </ul>
      </div>
    );
  }
  
  export default NavBar;