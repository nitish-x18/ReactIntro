import React from 'react'
import NavPart2 from './NavPart2'

function Navbar() {
  return (
    <>
      <nav className='flex py-5 px-10 items-center justify-between bg-emerald-950'>
        <h2 className='text-xl'>REACT.JS</h2>
        <NavPart2 />
      </nav>
    </>
  )
}

export default Navbar