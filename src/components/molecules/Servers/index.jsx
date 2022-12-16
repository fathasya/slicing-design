import React from 'react'
import Server from '../../../assets/img/Server.png'

const Servers = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center sm:space-x-9">
        <div>
          <img src={Server} alt="server-img" className="mr-5 w-7 sm:w-10" />
        </div>
        <div>
          <p className="text-xs font-bold sm:text-base sm:font-bold">50+</p>
          <p className="text-xs font-light sm:text-base sm:font-normal">
            Servers
          </p>
        </div>
      </div>
    </>
  )
}

export default Servers
