import React from 'react'
import Carousel from 'react-multi-carousel'
import { Card1, Card2, Card3 } from '../../molecules'
import { union, Ellipse1 } from '../../../assets'

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest
    // const carouselItems = [<Card1/>, <Card3/>, <Card3/>]
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? 'w-6 h-6 bg-red-600 ' : 'w-6 h-6 bg-gray-100'}
        onClick={() => onClick()}
      >
        {/* {React.Children.toArray(carouselItems)[index]} */}
      </button>
    )
  }
  // <Carousel showDots customDot={<CustomDot />}>
  //   {carouselItems}
  // </Carousel>

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button  className='w-6 h-6 bg-red-600 right-0' onClick={() => onClick()} />;
  };
  <Carousel  />;

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
            swipeable={false}
            draggable={false}
            showDots={true}
            customDot={<CustomDot />}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            customRightArrow={<CustomRightArrow />}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className='relative'
          >
            <div><Card1 /></div>
            <div><Card2 /></div>
            <div><Card3 /></div>
            <div><Card2 /></div>
            <div><Card1 /></div>
            {/* {carouselItems} */}
          </Carousel>


          
          {/* <div className="flex items-center justify-center p-10">
            <img src={union} width="30" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
            <img src={Ellipse1} width="12" className="mr-4" />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Testimonials
