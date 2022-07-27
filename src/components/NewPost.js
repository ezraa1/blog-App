import React, { useState } from "react";


function NewPost(){
    const[NewPostForm, setNewPostForm]= useState({title:"", content:"",author:""})
    function handleOnChange(event){
        setNewPostForm(NewPostForm=>({...NewPostForm,[event.target.name]: event.target.value}))
        }

return(

    <form  class="card">
    Title:<br></br>
<input onChange={handleOnChange} name="title" value={NewPostForm.title} placeholder="Title" /><br></br>
Username:<br></br>
<input onChange={handleOnChange} name="content" value={NewPostForm.content} placeholder="" /><br></br>
<textarea  onChange={handleOnChange} name="username" value={NewPostForm.author}
 placeholder="Type the news..." rows={20} /><br></br>
<input type="submit" value="Submit" />
</form>
)


    }
    export default NewPost;
    