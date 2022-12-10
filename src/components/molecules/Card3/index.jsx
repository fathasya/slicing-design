import React from "react";
import kim from '../../../assets/img/Ellipse 175-2.png';
import star from '../../../assets/img/star.png';

const Card3 = () => {
    return (
        <>
        <div className="px-10 pb-5 justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">

            <div className="flex">
                <div className="flex justify-start items-center py-5">
                    <img src={kim} width="50" className="mr-4"/>
                </div>

                <div className="justify-center items-center py-5 mr-8">
                    <p className="font-medium text-sm leading-8">
                        Kim Young Jou
                    </p>
                    <p className="text-xs font-light">
                        Seoul, South Korea                    
                    </p>
                </div>

                <div className="flex py-5  justify-end items-center">
                    <p className="font-medium text-sm ml-4">
                        4.5
                    </p>
                    <div>
                        <img src={star} width="15" className="ml-3"/>
                    </div>
                </div>
            </div>

            <div>
                <p>
                    "This is very unusual for my business that currently requires a virtual private network that has high security".
                </p>
            </div>
        </div>
        </>
    )
}


export default Card3;