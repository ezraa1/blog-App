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
  

    function handleNewPost({newPostData}){
        const serverOptions={
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify(newPostData)}


            fetch('http://localhost:3000/posts', serverOptions)
            .then (r=>r.json())
            .then(newPost=>setPosts(posts=>[...posts, newPost
            ]))
            
    }

function handleDeletePosts(deletedPosts){
    console.log(deletedPosts)
}

    function handleDeleteClick(){
       fetch(`http://localhost:3000/posts/${posts.id}`,{

        method:"DELETE",
    })
    .then((r) => r.json())
    .then(() => console.log("deleted!"));
}
    

 return(
    <div>
    <NavBar />
    <Routes>

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element=  {<Login />}  />
      
      <Route exact path="/" element={<Home />}  />
      
      </Routes>

<div>

<button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
<button  onClick={handleClick} >{showAddForm ? "Click": "Click"} to add new post</button><br></br>

{showAddForm ? <NewPost onSubmission={handleNewPost}/> : null}
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