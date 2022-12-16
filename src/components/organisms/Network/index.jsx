import React from 'react'
import { map, mask1, mask2, mask3, amazon, netflix } from '../../../assets'

const Network = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="mx-auto w-full max-w-6xl py-20 px-6 text-center">
          <p className="mx-auto mb-5 max-w-sm text-4xl font-medium leading-10">
            Huge Global Network of Fast VPN
          </p>
          <p className="mx-auto max-w-lg text-sm font-normal leading-10">
            See <b>LaslesVPN</b> everywhere to make it easier for you when you
            move locations.
          </p>
          <img src={map} className="block w-full py-10" />

          <div className="grid grid-cols-5 place-items-center">
            <div className="flex items-center justify-center">
              <img src={netflix} width="100" />
            </div>
            <div className="flex items-center justify-center">
              <img src={mask1} width="100" />
            </div>
            <div className="flex items-center justify-center">
              <img src={amazon} width="170" />
            </div>
            <div className="flex items-center justify-center">
              <img src={mask2} width="100" />
            </div>
            <div className="flex items-center justify-center">
              <img src={mask3} width="100" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Network
