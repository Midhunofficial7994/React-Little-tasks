import React from 'react'
import { useState } from 'react'

const Input = () => {

    const[count,setCount,text, setText]=useState(0);

    const incre=()=>{
        
    setCount(count+1);

    }
    // { count, setCount, text, setText }
    
    const decre=()=>{
        
        setCount(count-1);
    
        }

        
    const reset=()=>{
        
        setCount(0);
    
        }

        const functionA=(e)=>{
            console.log(e.target.value)
        }

        const handleChange = (e) => {
            setText(e.target.value);
          };

         const saved=(e)=>{
            setText(e.target.value);
         }
        
        
  
  return (
    <div>
        <h2>Title</h2>
        <input onChange={functionA} type="text" baluonChange={handleChange}   />
      {/* <input type ="text"></input> */}

      
      <button onClick={incre} >+</button>
      <button onClick={decre} >-</button>
      <button onClick={reset} >Reset</button>
      <button onClick={saved} >Save</button>

      <h1 >This is {count}</h1> 
    </div>
  )
}
export default Input






