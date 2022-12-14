import React from 'react'
import { Logo, Sosmed } from '../../molecules'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="mx-auto grid w-full max-w-6xl py-10 px-6 sm:grid-cols-2 sm:py-20">
          <div>
            <Logo />
            <p className="my-2 max-w-sm font-normal leading-6 sm:my-5 sm:max-w-xs sm:font-medium">
              LaslesVPN is a private virtual network that has a unique features
              and has high security.
            </p>
            <Sosmed />
            <p className="mb-5 text-sm text-gray-500">&copy;2020LaslesVPN</p>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <p>
                <b className="text-lg leading-10">Product</b>
                <ul className="text-base leading-8">
                  <li>Download</li>
                  <li>Pricing</li>
                  <li>Locations</li>
                  <li>Server</li>
                  <li>Countries</li>
                  <li>Blog</li>
                </ul>
              </p>
            </div>
            <div>
              <p>
                <b className="text-lg leading-10">Engage</b>
                <ul className="text-base leading-8">
                  <li>LaslesVPN ?</li>
                  <li>FAQ</li>
                  <li>Tutorials</li>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </p>
            </div>
            <div>
              <p>
                <b className="text-lg leading-10">Earn Money</b>
                <ul className="text-base leading-8">
                  <li>Affiliate</li>
                  <li>Become Partner</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Footer
