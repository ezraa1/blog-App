import React, { useEffect } from "react";
import Post from "./Post";
import { useState } from "react";
import PostDelete from "./PostDelete";
import NewPost from "./NewPost";


function PostsContainer(){

const [posts, setPosts]= useState([])

useEffect(() => {
  fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then((posts) => setPosts(posts));
}, []);


  function handleDeleteClick(id) {
if (window.confirm("Do you want to delete this post?")){
posts.splice(id,1);
}
setPosts([...posts])
  }
    return(
  

<div>

{posts.map((posts)=>(<Post key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  <button>remove</button>
  </Post>)) }
  <div>
  <PostDelete
                                 key={posts.id}
                                 posts={posts}
                                onDeleteClick={handleDeleteClick}
         
                              />
                              
  </div>
  </div>


)

}
export default PostsContainer;