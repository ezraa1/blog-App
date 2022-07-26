import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";


 

function App(){
    
const[posts, setPosts]=useState([])
    
useEffect(()=>{
    fetch('http://localhost:3000/posts')
    
    .then((response) => response.json())
    .then(posts => 
        setPosts(posts))
    },[])
  
    

 return(
<div>
<PostsContainer posts={posts}/>

</div>
 )
}
 export default App;