import React from "react";
import yessica from '../../../assets/img/Ellipse 175-1.png';
import star from '../../../assets/img/star.png';

const Card2 = () => {
    return (
        <>
        <div className="hidden sm:block px-5 sm:px-5 pb-5 justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">

            <div className="flex items-center justify-around">
                <div className="flex justify-start items-center py-5">
                    <img src={yessica} className="w-12 xl:w-12 sm:w-10 mr-4"/>
                </div>

                <div className="justify-center items-center py-5 mr-20 xl:mr-3 lg:mr-16 sm:mr-5">
                    <p className="font-bold text-base xl:font-medium sm:font-bold xl:text-sm sm:text-xs leading-8">
                        Yessica Christy
                    </p>
                    <p className="text-xs font-light">
                        Shanxi, China                     
                    </p>
                </div>

                <div className="flex py-5 justify-end items-center">
                    <p className="font-medium text-sm xl:ml-16 lg:ml-3">
                        4.5
                    </p>
                    <div>
                        <img src={star} width="15" className="ml-3"/>
                    </div>
                </div>
            </div>

            <div>
                <p className="xl:text-sm sm:text-xs">
                    "I like it because I like to travel far and still can connect with high speed".
                </p>
            </div>
        </div>
        </>
    )
}


export default Card2;