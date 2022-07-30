import React, { useEffect, useState } from "react";




function Home(){
const [posts, setPosts] =useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then((r) => r.json())
          .then((posts) => setPosts(posts));
      }, []);

    return(
<div>

</div>
    )
    
}
export default Home;