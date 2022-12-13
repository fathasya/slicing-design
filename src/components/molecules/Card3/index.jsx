import React from "react";
import kim from '../../../assets/img/Ellipse 175-2.png';
import star from '../../../assets/img/star.png';

const Card3 = () => {
    return (
        <>
        <div className="hidden sm:block px-5 pb-5 justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">

            <div className="flex items-center justify-around">
                <div className="flex justify-start items-center py-5">
                    <img src={kim} className="w-12 xl:w-12 sm:w-10 mr-4"/>
                </div>

                <div className="justify-center items-center py-5 mr-20 xl:mr-16 lg:mr-16 sm:mr-2">
                    <p className="font-bold text-base xl:font-medium sm:font-bold xl:text-sm sm:text-xs leading-8">
                        Kim Young Jou
                    </p>
                    <p className="text-xs font-light">
                        Seoul, South Korea                    
                    </p>
                </div>

                <div className="flex py-5  justify-end items-center">
                    <p className="font-medium text-sm ml-12 xl:ml-3 md:ml-0">
                        4.5
                    </p>
                    <div>
                        <img src={star} width="15" className="ml-3"/>
                    </div>
                </div>
            </div>

            <div>
                <p className="xl:text-sm sm:text-sm">
                    "This is very unusual for my business that currently requires a virtual private network that has high security".
                </p>
            </div>
        </div>
        </>
    )
}


export default Card3;