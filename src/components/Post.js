import React, {useHistory, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewPost from "./NewPost";
import PostsContainer from "./PostsContainer";


function Post({title, content, author}){


    return(
        <div>
     
           <h3>{title}</h3> 
            <p>{content}</p>
            <h4>{author}</h4>

             {/* <button onClick ={removePost}>delete</button> */}
             {/* <PostsContainer posts={posts}/> */}
        </div>
    )
}

export default Post;