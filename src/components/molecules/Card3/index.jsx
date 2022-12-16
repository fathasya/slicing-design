import React from 'react'
import kim from '../../../assets/img/Ellipse 175-2.png'
import star from '../../../assets/img/star.png'

const Card3 = () => {
  return (
    <>
      <div className="hidden items-center justify-center rounded border-2 border-gray-300 px-5 pb-5 hover:border-red-600 sm:block">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-start py-5">
            <img src={kim} className="mr-4 w-12 sm:w-10 xl:w-12" />
          </div>

          <div className="mr-20 items-center justify-center py-5 sm:mr-2 lg:mr-16 xl:mr-16">
            <p className="text-base font-bold leading-8 sm:text-xs sm:font-bold xl:text-sm xl:font-medium">
              Kim Young Jou
            </p>
            <p className="text-xs font-light">Seoul, South Korea</p>
          </div>

          <div className="flex items-center  justify-end py-5">
            <p className="ml-12 text-sm font-medium md:ml-0 xl:ml-3">4.5</p>
            <div>
              <img src={star} width="15" className="ml-3" />
            </div>
          </div>
        </div>

        <div>
          <p className="sm:text-sm xl:text-sm">
            "This is very unusual for my business that currently requires a
            virtual private network that has high security".
          </p>
        </div>
      </div>
    </>
  )
}

export default Card3
