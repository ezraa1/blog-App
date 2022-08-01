import React, { useState } from "react";
import NewPost from "./NewPost";

function Login(){
  const [posts, setPosts] =useState([])
  const [show, setShow] = useState(false);

  function handleClick(){
    
    setShow(show=>!show)
    function handleNewPost(newFormData){
      const serverOptions={
          method:"POST",
          headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
          },
          body:JSON.stringify(newFormData
          )
          }
          fetch('https://my-server1121.herokuapp.com/posts', serverOptions)
          .then(r=>r.json())
          .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
      }
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