import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="lg:m-auto text-center text-black rounded-md lg:flex justify-between items-center px-1 sm:text-sm  md:px-4 font-semibold">   
            <div className="">
                <h1>Image Classifier</h1>
            </div>
            <p className='md:font-normal'>
                &copy; {new Date().getFullYear()} Softmax Tech Solutions
            </p>
        </div>
    </footer>
  )
}

export default Footer