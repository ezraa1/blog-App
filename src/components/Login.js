import React, { useState } from "react";
import NewPost from "./NewPost";

function Login(){
  const [show, setShow] = useState(false);

  function handleClick(){
    setShow(show=>!show)
  }
    return(
        <div className="login">
      {/* {show ?<button onClick={handleClick} >{show ? "Close":"Create "}Post</button>: null} */}
        <form> 
        
        <label>
          Username:<br></br>
          <input type="text" name="name" />
        </label><br></br>
        <label>
          Pasword:<br></br>
          <input type="text" name="name" />
        </label><br></br>
         
        <button onClick={handleClick}>Submit</button>
         
      </form>
      
      </div>
    )
}
export default Login;