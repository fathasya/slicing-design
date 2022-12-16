import React from 'react'
import BtnSubscribe from '../../atoms/BtnSubscribe'

const Subscribe = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="block justify-around p-10 sm:flex">
              <div className="">
                <p className="text-xl font-bold xl:text-3xl xl:font-medium xl:leading-10">
                  Subscribe Now for Get Special Features!
                </p>
                <p className="my-2 text-xs font-light leading-10 xl:text-sm xl:font-normal">
                  Let's subscribe with us and find the fun.
                </p>
              </div>

              <div className="flex items-center justify-end">
                <BtnSubscribe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
