import React from 'react';
import logo from '../../../assets/img/Logo.png';

const Logo = () => {
    return (
        <>
        <div className='flex justify-start items-center'>
            <div>
                <img 
                src={logo} 
                width="20px" 
                className='mr-3 block cursor-pointer'
                alt={`logo-lasles-vpn`}
            />                
            </div>
            <div>
                <h1 className='font-bold text-lg'>Lasles<b>VPN</b></h1>                
            </div>
        </div>
        </>
    )
}

export default Logo;