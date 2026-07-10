import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-bold'>
        Home
        <Link to={"/Dashboard"}> Dashboard </Link>
    </div>
  )
}

export default Home