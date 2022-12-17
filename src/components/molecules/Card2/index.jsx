import React from 'react'
import yessica from '../../../assets/img/Ellipse 175-1.png'
import star from '../../../assets/img/star.png'

const Card2 = () => {
  return (
    <>
      <div className="m-5 h-56 sm:h-40 lg:h-52 items-center justify-center rounded border-2 border-gray-300 px-5 pb-5 hover:border-red-600 sm:block sm:px-5">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-start py-5">
            <img src={yessica} className="mr-4 w-12 sm:w-10 xl:w-12" />
            <div className="items-center justify-center sm:mr-5 lg:mr-16 xl:mr-3">
              <p className="text-base font-bold sm:text-xs sm:font-bold xl:text-sm xl:font-medium">
                Yessica Christy
              </p>
              <p className="text-xs font-light">Shanxi, China</p>
            </div>
          </div>

          <div className="flex items-center justify-end py-5">
            <p className="text-sm font-medium lg:ml-3 xl:ml-16">4.5</p>
            <div>
              <img src={star} width="15" className="ml-3" />
            </div>
          </div>
        </div>

        <div>
          <p className="sm:text-xs xl:text-sm">
            "I like it because I like to travel far and still can connect with
            high speed".
          </p>
        </div>
      </div>
    </>
  )
}

export default Card2
