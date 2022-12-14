import React from 'react'
import Free from '../../molecules/Free'
import Standard from '../../molecules/Standard'
import Premiun from '../../molecules/Premium'

const Plan = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-6xl py-20 px-6 text-center ">
          <div className="items-center justify-center pb-16">
            <p className="mb-5 text-4xl font-medium leading-10">
              Choose Your Plan
            </p>
            <p className="font-rubik mx-auto max-w-lg text-base font-normal">
              Let's choose the package that is best for you and explore it
              happily and cheerfully
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5 xl:gap-10">
            <Free />
            <Standard />
            <Premiun />
          </div>
        </div>
      </div>
    </>
  )
}

export default Plan
