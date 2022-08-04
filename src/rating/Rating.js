import React from "react"
// import { Image } from "react-bootstrap";

const Rating = ({rating,handleRating}) => {
    var x = [];
   
    for (let i=0;i<rating;i++){
        
         x[i]= <span onClick={()=>handleRating(i)} style={{fontSize:"20pt", color:"rgb(253,218,22)",cursor:'pointer'}}> ★</span>   
    }
    for (let i=rating+1;i<=5;i++){
       
       x[i]= <span onClick={()=>handleRating(i)}style={{fontSize:"20pt", color:"lightgrey",cursor:'pointer'}}> ★</span>
   }
    
    return (x )
  }

export default Rating;
