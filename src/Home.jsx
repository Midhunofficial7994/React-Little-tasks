import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
       Hi, This is Home!!
       <br></br>
       <br></br>
       <Link to="+"><button>+</button></Link><br></br>
       <br></br>
       <Link to="Saved Items">Saved Items Here!!!</Link>
    </div>
  )
}

export default Home
