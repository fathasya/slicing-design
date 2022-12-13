import React from "react";
import vie from '../../../assets/img/Ellipse 175.png';
import star from '../../../assets/img/star.png';

const Card1 = () => {
    return (
        <>
        <div className="px-5 pb-5 justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">

            <div className="flex justify-around">
                <div className="flex justify-center items-center py-5 mr-2 xl:mr-16 lg:mr-16 sm:mr-3">
                    <img src={vie} className="w-12 xl:w-12 sm:w-10 mr-4"/>
                    <div>
                        <p className="font-bold text-base xl:font-medium sm:font-bold xl:text-sm sm:text-xs">
                            Viezh Robert
                        </p>
                        <p className="text-xs font-light">
                            Warsaw, Poland                     
                        </p>
                    </div>
                </div>

                <div className="flex justify-end items-center ml-12 xl:ml-5 md:ml-3">
                    <p className="font-medium text-sm">
                        4.5
                    </p>
                    <div>
                        <img src={star} width="15" className="ml-3"/>
                    </div>
                </div>
            </div>

            <div>
                <p className="xl:text-sm sm:text-xs">
                    "Wow... I'm very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".
                </p>
            </div>
        </div>
        </>
    )
}


export default Card1;