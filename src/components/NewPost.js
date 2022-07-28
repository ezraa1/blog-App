import React, { useState } from "react";


function NewPost({onSubmission}){
    const[newPostForm, setNewPostForm]= useState({title:"", content:"",author:""})

    function handleOnChange(event){
        setNewPostForm(NewPostForm=>({...NewPostForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            onSubmission(newPostForm)
            setNewPostForm({title:"",content:"", author:""})
        }

return(

    <form onSubmit={handleSubmit} class="card">
    Title:<br></br>
<input onChange={handleOnChange} name="title" value={newPostForm.title} placeholder="Title" /><br></br>
Username:<br></br>
<input onChange={handleOnChange} name="author" value={newPostForm.author} placeholder="your username" /><br></br>
Content:<br></br>
<textarea  onChange={handleOnChange} name="content" value={newPostForm.content} placeholder="Type the news..." rows={20} /><br></br>
<input type="submit" value="Submit" />
</form>
)


    }
    export default NewPost;
    