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
import PostDelete from "./PostDelete";

 

function App({post, onDeletePost}){
    
const[posts, setPosts]=useState([])
    const[showForm, setShowForm]= useState(false)
 



  

    

  

    

 return(
<div>
<NavBar />
<Routes>
      <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
          
        
        {/* <Route  path="/login"element={< Login />} /> */}
         
        <Route  path="/"element={< Home />} />
        {/* <Route path="/post" element={<Post />} /> */}
         
        </Routes>


         
         
       

<PostsContainer />

    {/* <Home/> */}
    {/* <ReadMore/> */}
        </div>



 )
 }
 export default App;