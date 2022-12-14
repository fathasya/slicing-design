import React from 'react'

const BtnGetStarted = (props) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="inlene-block font-rubik text-md 
                    rounded bg-red-600 px-10 py-3 font-medium 
                    leading-tight text-white shadow-lg
                    transition duration-150 ease-in-out
                    hover:bg-white hover:text-red-600 hover:shadow-lg
                    focus:bg-red-600 focus:text-white 
                    focus:shadow-lg focus:outline-none 
                    focus:ring-0 active:bg-red-800 active:shadow-lg"
        >
          <h1>Get Started!</h1>
        </button>
      </div>
    </>
  )
}

export default BtnGetStarted
