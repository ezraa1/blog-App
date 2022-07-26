import React from "react";
import Login from "./Login";

function NavBar(){

    return(
<div className="navbar">
<div className="nav-list">
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Home</li>
    </ul>
</div>
<Login />
</div>

    )
}
export default NavBar;