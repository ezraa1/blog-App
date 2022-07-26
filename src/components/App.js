import React, { useEffect, useState } from "react";


 

function App(){
    

    
    fetch('http://localhost:3000/posts')
    
    .then((response) => response.json())
    .then(posts => 
        console.log(posts))
        
  
    

 return(
<div>


</div>
 )
}
 export default App;