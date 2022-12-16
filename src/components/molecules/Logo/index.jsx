import React from 'react'
import logo from '../../../assets/img/Logo.png'

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-start">
        <div>
          <img
            src={logo}
            width="20px"
            className="mr-3 block cursor-pointer"
            alt={`logo-lasles-vpn`}
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">
            Lasles<b>VPN</b>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Logo
