import React from 'react';
import logo from '../../../assets/img/Logo.png';

const Logo = () => {
    return (
        <>
        <div className='flex justify-start items-center'>
            <div>
                <img src={logo} width="20px" className='mr-3' />                
            </div>
            <div>
                <h1 className='font-bold text-lg'>Lasles<b>VPN</b></h1>                
            </div>
        </div>
        </>
    )
}

export default Logo;