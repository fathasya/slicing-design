import React from "react";
import yessica from '../../../assets/img/Ellipse 175-1.png';
import star from '../../../assets/img/star.png';

const Card2 = () => {
    return (
        <>
        <div className="px-10 pb-5 justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">

            <div className="flex">
                <div className="flex justify-start items-center py-5">
                    <img src={yessica} width="50" className="mr-4"/>
                </div>

                <div className="justify-center items-center py-5 mr-18">
                    <p className="font-medium text-sm leading-8">
                        Yessica Christy
                    </p>
                    <p className="text-xs font-light">
                        Shanxi, China                     
                    </p>
                </div>

                <div className="flex py-5 justify-end items-center">
                    <p className="font-medium text-sm ml-12">
                        4.5
                    </p>
                    <div>
                        <img src={star} width="15" className="ml-3"/>
                    </div>
                </div>
            </div>

            <div>
                <p>
                    "I like it because I like to travel far and still can connect with high speed".
                </p>
            </div>
        </div>
        </>
    )
}


export default Card2;