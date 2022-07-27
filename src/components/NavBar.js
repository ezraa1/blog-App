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
      <div class="nav justify-content-end">
        <NavLink to="/" exact>Home </NavLink>
        <NavLink to="/about" exact> About </NavLink>
        <NavLink to="/login" exact >  <button onClick={handleClick}>{showForm ? "Close":"Login" }</button>  </NavLink>
      </div>
    );
  }
  
  export default NavBar;