import React from 'react';
import BtnSignUp from '../../atoms/BtnSignUp';
// import Logo from '../../../assets/img/Logo.png';
import Logo from '../../molecules/Logo';

const Navbar = () =>{
    return(
        <>


            <div className='py-5 px-20 shadow-lg bg-white w-full font-rubik text-#4F5665 inline-flex items-center'>
                <div className='mr-40'>
                    <Logo/>
                </div>
                
                    <p className='ml-20 mr-10 text-xs'>About</p>
                    <p className='mr-10 text-xs'>Features</p>
                    <p className='mr-10 text-xs'>Pricing</p>
                    <p className='mr-10 text-xs'>Testimonials</p>
                    <p className='mr-40 text-xs'>Help</p>
                    <h2 className='mr-10 text-xs'><a href='#'><b>Sign In</b></a></h2>
                    <BtnSignUp />
            </div>
        </>
    )
}


export default Navbar;