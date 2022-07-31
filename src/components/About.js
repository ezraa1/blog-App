import React from "react";


function About(){
  const imgUrl= 'https://media.istockphoto.com/photos/sports-balls-on-the-field-with-yard-line-soccer-ball-american-and-picture-id942206100?b=1&k=20&m=942206100&s=170667a&w=0&h=S6SIMeZy5KWm-SEmOAlW-TGTUqCEvtK9WrupPA7qLKg='
    return(
        <div className="image">
         <img src={imgUrl} alt="sportImage" />
            <p></p>
        
            <p><h1>Check up daily to get more detailed Sports news</h1>
            <h2>We enable tranparency in providing our Sports news.</h2>
            </p>
            

        </div>
        
    )
}
export default About;