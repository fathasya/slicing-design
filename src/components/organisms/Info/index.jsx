import React from 'react'
import { Users, Locations, Servers } from '../../molecules'

const Info = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6 drop-shadow-lg">
        <div className="grid w-full grid-cols-3 place-items-center rounded-xl border border-gray-100 bg-white py-5 sm:py-9">
          <Users />
          <Locations />
          <Servers />
        </div>
      </div>
    </>
  )
}

export default Info
