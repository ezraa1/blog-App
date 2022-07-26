import React, {useState} from "react";
import Login from "./Login";

function NavBar(){
    const [showForm, setShowForm]= useState(false)

    function handleClick(){
        setShowForm(showForm=>!showForm)


    }
    return(
<div className="navbar">

    <ul>
    
        <li><button>About Us</button></li>
        <li><button>Contact Us</button></li>
        <li><button>Home</button></li>
        <li><button onClick={handleClick}>{showForm ? <Login/>:"Login"}</button></li>
    </ul>


</div>

    )
}
export default NavBar;