import React, {useHistory, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewPost from "./NewPost";
import PostsContainer from "./PostsContainer";


function Post({title, content, author}){
    const[posts, setPosts]=useState()
const[addedPost, setAddedPost]=useState([])
const[showForm, setShowForm]= useState(false)

 

function handleDeleteClick(){
  fetch('http://localhost:3000/posts/' + posts.id,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((posts) =>(posts));
}

    return(
        <div>
     
           <h3>{title}</h3> 
            {content}
            {author}

             <button onClick ={handleDeleteClick}>delete</button>
             {/* <PostsContainer posts={posts}/> */}
        </div>
    )
}

export default Post;