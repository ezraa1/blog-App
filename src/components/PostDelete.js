import React from "react";


function PostDelete({posts, onDeleteClick}) {
    const { id, } = posts;

    function handleDeleteClick() {
        onDeleteClick(id);
      }
  return (
    <div>
        <button  onClick={handleDeleteClick} className='imageButton2 imageButton3'> Dlt</button>
      </div>
  )
}

export default PostDelete;