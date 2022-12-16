import React from 'react'
import vie from '../../../assets/img/Ellipse 175.png'
import star from '../../../assets/img/star.png'

const Card1 = () => {
  return (
    <>
      <div className="items-center justify-center rounded border-2 border-gray-300 px-5 pb-5 hover:border-red-600">
        <div className="flex justify-around">
          <div className="mr-2 flex items-center justify-center py-5 sm:mr-3 lg:mr-16 xl:mr-16">
            <img src={vie} className="mr-4 w-12 sm:w-10 xl:w-12" />
            <div>
              <p className="text-base font-bold sm:text-xs sm:font-bold xl:text-sm xl:font-medium">
                Viezh Robert
              </p>
              <p className="text-xs font-light">Warsaw, Poland</p>
            </div>
          </div>

          <div className="ml-12 flex items-center justify-end md:ml-3 xl:ml-5">
            <p className="text-sm font-medium">4.5</p>
            <div>
              <img src={star} width="15" className="ml-3" />
            </div>
          </div>
        </div>

        <div>
          <p className="sm:text-xs xl:text-sm">
            "Wow... I'm very happy to use this VPN. It turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best".
          </p>
        </div>
      </div>
    </>
  )
}

export default Card1
