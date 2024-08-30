import React, { useState } from 'react'

const Increment = () => {
    const[count,setCount]=useState(0);

    const incre=()=>{
        
    setCount(count+1);

    }

    
    const decre=()=>{
        
        setCount(count-1);
    
        }

        
    const reset=()=>{
        
        setCount(0);
    
        }
  return (
    <div>
          <h1 >This is {count}</h1>  
      <button className={incre} >+</button>
      <button className={decre} >-</button>
      <button className={reset} >Reset</button>
    </div>
  )
}

export default Increment






