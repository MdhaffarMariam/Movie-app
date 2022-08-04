import React from 'react'

const Rating = ({rating , handleRat}) => {
    var x = [];
    for (var i=0 ; i< rating ; i++){
        x[i]= <span  onClick={()=>{handleRat(i)}} style = {{color: 'yellow' , cursor: 'pointer'}}>★</span>
    }
    for ( var i=rating ; i<=5 ; i++){
        x[i]= <span  onClick={()=>{handleRat(i)}} style = {{color: 'grey' , cursor: 'pointer'}}>★</span>   
    }
    
  return (x)
}

export default Rating