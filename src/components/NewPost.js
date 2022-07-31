import React, { useState } from "react";


function NewPost({onSubmission}){
    const[newPostForm, setNewPostForm]= useState({title:"", content:"",author:""})
 
// remove


;

    function handleOnChange(event){
        setNewPostForm(newPostForm=>({...newPostForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            onSubmission(newPostForm)
            setNewPostForm({title:"",content:"", author:""} )
            return false;
            
        }

return(
    <div>

    <form onSubmit={handleSubmit} className="fm">
    Title:<br></br>
<input onChange={handleOnChange} name="title" value={newPostForm.title} placeholder="Title" /><br></br>
Username:<br></br>
<input onChange={handleOnChange} name="author" value={newPostForm.author} placeholder="your username" /><br></br>
Content:<br></br>
<textarea  onChange={handleOnChange} name="content" value={newPostForm.content} placeholder="Type the news..." rows={10} /><br></br>
<input type="submit" value="Publish" />

</form>
{/* <div className="delete" onClick={() => removePost(posts._id)}>
              Remove Ite
            </div> */}
</div>
)


    }
    export default NewPost;
    