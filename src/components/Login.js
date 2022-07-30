import React, { useState } from "react";
import NewPost from "./NewPost";

function Login(){
  const [show, setShow] = useState(false);
  const[posts, setPosts]=useState([])

  function handleClick(){
    setShow(true)
}

  function handleNewPost(newFormData){
    const serverOptions={
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(newFormData
        )
        }
        fetch('http://localhost:3000/posts', serverOptions)
        .then(r=>r.json())
        .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
    }



    return(
        <div>
      {show ?<button onClick={handleClick} >{show ? "Close":"Create "}Post</button>: null}
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