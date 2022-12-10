import React from 'react';
import BtnGetStarted from '../../atoms/BtnGetStarted';
import Ilustration from '../../../assets/img/Illustration 1.png';

const Hero = () =>{
    return (
        <>
        <div className='p-20 grid grid-cols-2 '>
            <div className='grid grid-cols-1'>
                <p className='font-medium text-5xl'>
                    Want anything to be easy with
                    <b>LaslesVPN.</b>
                </p>
                <p>
                    Provide a network for all your needs with ease and fun using
                    <b>LaslesVPN</b>
                    discover interesting features from us.
                </p>
                <BtnGetStarted/>
            </div>
            <div className='grid grid-cols-1 gap-1'>
                <img width="600" height="370" src={Ilustration} />
            </div>
        </div>

        </>

    )
}


export default Hero;