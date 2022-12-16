import React from 'react'

const BtnSignUp = () => {
  return (
    <>
      <div class="flex justify-center">
        <button
          type="button"
          className="font-rubik inline-block rounded-full border-2 
                    border-red-600 px-5 py-2 text-xs 
                    font-medium leading-tight text-red-600 transition
                    duration-150 ease-in-out hover:bg-red-600
                    hover:text-white hover:shadow-lg focus:bg-red-600
                    focus:text-white focus:shadow-lg 
                    focus:outline-none focus:ring-0 
                    active:bg-red-800 active:shadow-lg sm:px-7"
        >
          Sign Up
        </button>
      </div>
    </>
  )
}

export default BtnSignUp
