import React from 'react'
// import Navbar from './Navbar'
import img from "../img/neom.jpg"

function Home() {
  return (
    <>
    {/* <Navbar/> */}
      <h1>Home Page</h1>
      <div className='size'>
      <img src={img} alt='Img'/>
      </div>
    </>
  )
}

export default Home
