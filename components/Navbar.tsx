import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='uppercase max-w-[1180px] m-auto text-white rounded-md flex justify-between items-center h-10 bg-blue-400 px-[10px] font-semibold'>
        <div className="">
            <h1>Image Classifier</h1>
        </div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar