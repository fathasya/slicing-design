import React from 'react';
import Server from '../../../assets/img/Server.png';

const Servers = () =>{
    return(
        <>
        <div className='w-full flex items-center justify-center sm:space-x-9'>
            <div>
                <img src={Server} className='w-7 sm:w-10 mr-5'/>
            </div>
            <div>
                <p className='font-bold text-xs sm:font-bold sm:text-base'>50+</p>
                <p className='font-light sm:font-normal text-xs sm:text-base'>Servers</p>
            </div>
        </div>
        </>
    )
}

export default Servers;