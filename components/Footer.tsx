import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="m-auto text-black rounded-md flex justify-between items-center px-4 font-semibold">   
            <div className="">
                <h1>Image Classifier</h1>
            </div>
            <p className='font-normal'>
                &copy; {new Date().getFullYear()} Softmax Tech Solutions
            </p>
        </div>
    </footer>
  )
}

export default Footer