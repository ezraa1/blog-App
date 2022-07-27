import React from "react";
import Post from "./Post";

function PostsContainer({posts}){


return(

<div className="posts-container">
{posts.map(post=>(<Post key={post.id} title={post.title} content={post.content} author = {post.author}>
  </Post>)) }
</div> 

)

}
export default PostsContainer;