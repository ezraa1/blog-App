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

const removePost = (id) => {
    if (window.confirm("Do you want to delete this post?")) {
      posts.forEach((posts, index) => {
        if (posts._id === id) {
          posts.splice(index, 1);
        }
      });
      setPosts([...posts]); 
      // console.log([...posts])
    }
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/posts ${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedPosts = posts.filter((posts) => posts._id !== id);
        setPosts(updatedPosts );
        const removePost = (id) => {
          if (window.confirm("Do you want to delete this post?")) {
            posts.forEach((posts, index) => {
              if (posts._id === id) {
                posts.splice(index, 1);
              }
            });
            setPosts([...posts]); 
            // console.log([...posts])
          }
        }
      });
    }
return(
  

<div>
{posts.map((posts)=>(<Post key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
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