import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { Card1, Card2, Card3 } from '../../molecules'
import { union, Ellipse1 } from '../../../assets'

const Testimonials = () => {
  const [slideActive, setSlideActive] = useState()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const CustomDot = ({ onClick, ...rest }) => {
    const { active, index } = rest
    active && setSlideActive(index)
    return (
      <button
        className={`${
          active ? 'w-8 bg-red-600' : 'w-4 bg-gray-300'
        } mx-2 h-4 rounded-full duration-500`}
        onClick={onClick}
      />
    )
  }

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="absolute bottom-0 right-5 z-10 flex items-center justify-center rounded-full border border-red-500 p-2"
        onClick={onClick}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    )
  }

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        className="absolute bottom-0 right-16 z-10 flex items-center justify-center rounded-full border border-red-500 p-2"
        onClick={onClick}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    )
  }

  const carouselItems = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card1 />,
    <Card2 />,
    <Card3 />,
  ]

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16">
          <div className="mb-10 text-center sm:mb-16">
            <p className="mx-auto mb-5 max-w-sm text-3xl font-medium sm:mb-8 sm:text-4xl">
              Trusted by Thousands of Happy Customer
            </p>
            <p className="font-base mx-auto max-w-lg text-sm">
              These are the stories of or customer who has joned us with great
              pleasure when seing this crazy feature.
            </p>
          </div>
          <Carousel
            showDots
            customDot={<CustomDot />}
            responsive={responsive}
            ssr
            infinite
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            className="py-10"
          >
            {carouselItems.map((item, i) => {
              var active = slideActive + 1
              if (active === carouselItems.length) active = 0
              return (
                <div
                  key={i}
                  className={`${active == i && 'scale-110'} duration-500`}
                >
                  {item}
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Testimonials
