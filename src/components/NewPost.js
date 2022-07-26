import React, { useState } from "react";


function NewPost(){
    const[NewPostForm, setNewPostForm]= useState({title:"", content:"",author:""})
   

return(

    <form  className="new-poem-form">
<input  name="title" value={NewPostForm.title} placeholder="Title" />
<input name="content" value={NewPostForm.content} placeholder="Author" />
<textarea  name="author" value={NewPostForm.author}
 placeholder="Type the news..." rows={10} />
<input type="submit" value="Submit" />
</form>
)


    }
    export default NewPost;
    