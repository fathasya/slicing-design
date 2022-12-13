import React from 'react';
import Location from '../../../assets/img/location.png';

const Locations = () =>{
    return(
        <>
            <div className='border-x-2 border-[#EEEFF2] w-full flex items-center justify-center sm:space-x-9'>
                <div>
                    <img src={Location} className='w-7 sm:w-10 mr-5'/>
                </div>
                <div>
                    <p className='font-bold text-xs sm:font-bold sm:text-base'>30+</p>
                    <p className='font-light sm:font-normal text-xs sm:text-base'>Locations</p>
                </div>
            </div>
        </>
    )
}

export default Locations;