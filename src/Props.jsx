import React from 'react'
import { useLocation } from 'react-router-dom'

const Props = (props) => {

  const location = useLocation();
 const { count, text } = location.state || { count: 0, text: '' };
  return (
    <div>
     

     <h1>Saved Items</h1>
      <p>Text: {text}</p>
      <p>Count: {count}</p>


    </div>
  )
}

export default Props




  
