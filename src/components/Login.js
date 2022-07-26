import React, { useState } from "react";

function Login(){


    return(
        
        
        <form >
        
        <label>
          Username:<br></br>
          <input type="text" name="name" />
        </label><br></br>
        <label>
          Pasword:<br></br>
          <input type="text" name="name" />
        </label><br></br>
         
        <input type="submit" value="Submit" />
      </form>
     
    )
}
export default Login;