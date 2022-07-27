import React, { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PostsContainer from "./PostsContainer";
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
    <Routes>

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element=  {<Login />}  />
      
      <Route exact path="/" element={<Home />}  />
      
      </Routes>

<div>
<button  onClick={handleClick} >{showAddForm ? "Click": "Click"} to add new post</button><br></br>

{showAddForm ? <NewPost /> : null}
</div>

      <div>
      <PostsContainer posts={posts}/>
      </div>
  </div>



/* <button  onClick={handleClick} >{showAddForm ? "Click": "Click"} to add new post</button><br></br>

        {showAddForm ? <NewPost /> : null}

<PostsContainer posts={posts}/> */

 )
 
}
 export default App;