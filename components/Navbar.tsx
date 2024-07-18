import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-w-[1180px] m-auto text-black bg-gray-100 rounded-md flex justify-between items-center h-10 shadow-sm border px-[10px] font-semibold'>
        <div className="">
            <h1 className='text-blue-600 sm:text-sm'>Fashion Items Classifier</h1>
        </div>
        <ul>
            <li>
                <Link href="/" className=''>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar