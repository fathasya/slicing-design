import React from 'react'
import BtnGetStarted from '../../atoms/BtnGetStarted'
import { illustration1 } from '../../../assets'

const Hero = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center py-10 px-6 sm:py-20">
        <div className="grid gap-32 sm:grid-cols-2">
          <div className="grid grid-cols-1">
            <p className="mb-5 text-3xl font-medium sm:mb-8 sm:text-3xl xl:text-5xl">
              Want anything to be easy with
              <b> LaslesVPN. </b>
            </p>
            <p className="mb-5 text-xs sm:mb-8 md:text-xs xl:text-base">
              Provide a network for all your needs with ease and fun using
              <b> LaslesVPN </b>
              discover interesting features from us.
            </p>
            <BtnGetStarted />
          </div>
          <div className="hidden justify-end gap-1 sm:grid sm:grid-cols-1">
            <img src={illustration1} className="block w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
