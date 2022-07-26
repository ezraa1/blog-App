import React from "react";

function Login(){


    return(
        <form>
        <label>
          Username:<br></br>
          <input type="text" name="name" />
        </label><br></br>
        <label>
          Pasword:<br></br>
          <input type="text" name="name" />
        </label><br></br>
         
        <input type="submit" value="Submit" /><br></br>
      </form>
    )
}
export default Login;