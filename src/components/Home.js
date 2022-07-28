import React from "react";




function Home(){
const imgurl = "https://sm.imgix.net/21/17/rmache.jpg?w=640&h=480&auto=compress,format&fit=clip"



    return(
<div>
    <img src={imgurl} alt="HOME" />
</div>
    )
}
export default Home;