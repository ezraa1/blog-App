import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";



function Home(){
const [posts, setPosts] =useState([])


const [show, setShow] = useState(false);


function handleClick(){
  setShow(show=>!show)
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
      fetch('https://my-server1121.herokuapp.com/posts', serverOptions)
      .then(r=>r.json())
      .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
  }



   

    return(
<div>
      <button onClick={handleClick} >{show? "Close":"Create "} Post</button><br></br>
      {show ? <NewPost onSubmission={handleNewPost} />: null}  
      </div>
    )
    
}
export default Home;