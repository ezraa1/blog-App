import React, {useHistory, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewPost from "./NewPost";
import PostsContainer from "./PostsContainer";


function Post({title, content, author}){
//     const[posts, setPosts]=useState()
// const[addedPost, setAddedPost]=useState([])
// const[showForm, setShowForm]= useState(false)
// const arr=[]
//  // remove
// const removePost = (id) => {
//   if (window.confirm("Do you want to delete this post?")) {
//     arr.forEach((posts, index) => {
//       if (posts._id === id) {
//         posts.splice(index, 1);
//       }
//     });
//     // setPosts([1]); 
//     console.log([...posts])
//   }
// }

// function handleDeleteClick(){
//   fetch('http://localhost:3000/posts/' + posts.id,{
//       method: "DELETE",
//     })
//     .then((r) => r.json())
//     .then((posts) =>(posts));
// }

    return(
        <div>
     
           <h3>{title}</h3> 
            <p>{content}</p>
            {author}

             {/* <button onClick ={removePost}>delete</button> */}
             {/* <PostsContainer posts={posts}/> */}
        </div>
    )
}

export default Post;