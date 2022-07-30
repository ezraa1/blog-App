import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Post from "./Post";

 

function App({post, onDeletePost}){
    
const[posts, setPosts]=useState([])
const[showForm, setShowForm]= useState(false)
 

useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

  

    function handleClick(){
        setShowForm(showForm=>!showForm)

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
<NavBar />
<Routes>
      <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
          
        
        {/* <Route  path="/login"element={< Login />} /> */}
         
        <Route  path="/"element={< Home />} />
        <Route path="/post" element={<Post />} />
         
        </Routes>


         <button onClick={handleClick} >{showForm ? "Close":"Create "} Post</button><br></br>
         
        {showForm ? <NewPost onSubmission={handleNewPost} />: null}  

<PostsContainer posts={posts}/>

    <Home/>
    
        </div>



 )
}
 export default App;