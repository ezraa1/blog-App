import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";


 

function App(){
    
const[posts, setPosts]=useState([])
    
useEffect(()=>{
    fetch('http://localhost:3000/posts')
    
    .then((response) => response.json())
    .then(posts => 
        setPosts(posts))
    },[])
  
    

 return(
<div className="app">
<NavBar />
<PostsContainer posts={posts}/>

</div>
 )
}
 export default App;