import React from 'react'

const Triiger = () => {

    const functionA=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
      <input onChange={functionA} type='text'/>
    </div>
  )
}

export default Triiger;



