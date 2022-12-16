import React from 'react'
import { Card1, Card2, Card3 } from '../../molecules'
import { union, Ellipse1 } from '../../../assets'

const Testimonials = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 text-center sm:mb-16">
            <p className="mx-auto mb-5 max-w-sm text-3xl font-medium sm:mb-8 sm:text-4xl">
              Trusted by Thousands of Happy Customer
            </p>
            <p className="font-base mx-auto max-w-lg text-sm">
              These are the stories of or customer who has joned us with great
              pleasure when seing this crazy feature.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 sm:gap-3 xl:gap-10">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>

          <div className="flex items-center justify-center p-10">
            <img src={union} width="30" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
