import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";
import NewPost from "./NewPost";


 

function App(){
    
const[posts, setPosts]=useState([])
const [showAddForm, setShowAddForm]=useState(false)

function handleClick(){
    setShowAddForm(showAddForm=>showAddForm=!showAddForm)
}
    
useEffect(()=>{
    fetch('http://localhost:3000/posts')
    
    .then((response) => response.json())
    .then(posts => 
        setPosts(posts))
    },[])
  
    

 return(
<div>

<NavBar />
<button class= "card" onClick={handleClick} >{showAddForm ? "Click": "Click"} to add new post</button><br></br>

        {showAddForm ? <NewPost /> : null}

<PostsContainer posts={posts}/>

</div>
 )
}
 export default App;