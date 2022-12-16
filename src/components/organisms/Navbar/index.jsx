import React, { useState } from 'react'
import { IconClose, IconMenu } from '../../../assets'
import BtnSignUp from '../../atoms/BtnSignUp'
import { NavItem } from '../../constants'
import {Logo} from '../../molecules'

const Navbar = () => {
  const [toogle, setToogle] = useState(false)

  return (
    <>
      <div className="font-rubik bg-white text-[#4F5665] shadow-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 sm:px-0">
          <div className="md:ml-5 md:mr-20 lg:ml-0 lg:mr-40 xl:mr-60">
            <Logo />
          </div>
          <IconMenu
            onClick={() => setToogle((state) => !state)}
            className="h-6 w-6 text-gray-900 md:hidden"
          />
          <div className="justify-beetwen hidden items-center md:flex">
            {NavItem.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="md:mr-5 md:text-xs lg:mr-7"
              >
                {item.name}
              </a>
            ))}
            <h2 className="md:mr-4 md:text-xs lg:mr-7 lg:ml-5">
              <a href="#">
                <b>Sign In</b>
              </a>
            </h2>
            <BtnSignUp />
          </div>
        </div>
      </div>
      {toogle && (
        <div className="fixed inset-0 z-50 bg-white">
          <IconClose
            onClick={() => setToogle((state) => !state)}
            className="m-4 ml-auto h-6 w-6 text-gray-900"
          />
          <div className="flex flex-col space-y-4">
            {NavItem.map(({ name, href }, i) => (
              <a
                href={href}
                className="px-4 text-lg font-semibold text-gray-900"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
