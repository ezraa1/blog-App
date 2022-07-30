import React from "react";
import Post from "./Post";
import { useState } from "react";

import NewPost from "./NewPost";

function PostsContainer({posts}){
  // remove
  
  
return(
  

<div>
{posts.map((posts)=>(<Post key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  <button>remove</button>
  </Post>)) }
  </div>


)

}
export default PostsContainer;