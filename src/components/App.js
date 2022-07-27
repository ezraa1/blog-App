import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";
import NewPost from "./NewPost";


 

function App(){
    
const[posts, setPosts]=useState([])

    
useEffect(()=>{
    fetch('http://localhost:3000/posts')
    
    .then((response) => response.json())
    .then(posts => 
        setPosts(posts))
    },[])
  
    

 return(
<div className="app" style={{ 
      backgroundImage: `url("background.jpg")` 
    }}>

<NavBar />
{/* <button onClick={handleClick} >{showForm ? "LOGIN": "SUBMIT"}</button><br></br>

        {showForm ? <Login /> : null} */}
<NewPost />
<PostsContainer posts={posts}/>

</div>
 )
}
 export default App;