import React from 'react';
import BtnGetStarted from '../../atoms/BtnGetStarted';
import Ilustration from '../../../assets/img/Illustration 1.png';

const Hero = () =>{
    return (
        <>
        <div className='py-10 sm:py-20 px-6 max-w-6xl w-full mx-auto flex justify-center items-center'>
            <div className='grid sm:grid-cols-2 gap-32'>
                <div className='grid grid-cols-1'>
                    <p className='font-medium text-3xl xl:text-5xl sm:text-3xl sm:mb-8 mb-5'>
                        Want anything to be easy with 
                        <b> LaslesVPN. </b>
                    </p>
                    <p className='text-xs xl:text-base md:text-xs sm:mb-8 mb-5'>
                        Provide a network for all your needs with ease and fun using
                        <b> LaslesVPN </b>
                        discover interesting features from us.
                    </p>
                    <BtnGetStarted/>
                </div>
                <div className='hidden sm:grid sm:grid-cols-1 gap-1 justify-end'>
                    <img src={Ilustration} className="w-full block" />
                </div>
            </div>

        </div>

        </>

    )
}


export default Hero;