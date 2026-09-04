import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='flex bg-emerald-700 px-4 py-6 items-center justify-between'>
        <h2 className='font-bold text-2xl'>React</h2>
        <div className='flex gap-4 underline'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header