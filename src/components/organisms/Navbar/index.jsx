import React from 'react';
import BtnSignUp from '../../atoms/BtnSignUp';
import Logo from '../../molecules/Logo';

const Navbar = () =>{
    return(
        <>
            <div className='shadow-lg bg-white font-rubik text-[#4F5665]'>
                <div className='py-6 max-w-6xl w-full mx-auto flex justify-center items-center'>
                    <div className='md:ml-5 lg:ml-0 md:mr-20 lg:mr-40 xl:mr-60'>
                        <Logo/>
                    </div>         
                    <div className='hidden md:flex justify-beetwen items-center'>
                        <p className='md:text-xs md:mr-5 lg:mr-7 lg:ml-10'>About</p>
                        <p className='md:text-xs md:mr-5 lg:mr-7 '>Features</p>
                        <p className='md:text-xs md:mr-5 lg:mr-7 '>Features</p>
                        <p className='md:text-xs md:mr-5 lg:mr-7 '>Pricing</p>
                        <p className='md:text-xs md:mr-5 lg:mr-7 '>Testimonials</p>
                        <p className='md:text-xs md:mr-5 lg:mr-20'>Help</p>
                        <h2 className='md:text-xs md:mr-4 lg:mr-7 lg:ml-5'><a href='#'><b>Sign In</b></a></h2>
                        <BtnSignUp />
                    </div>       


                </div>
            </div>
        </>
    )
}


export default Navbar;