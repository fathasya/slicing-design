import React from "react";
import Peta from '../../../assets/img/map.png';
import dc from '../../../assets/img/Mask Group-1.png';
import spotify from '../../../assets/img/Mask Group-2.png';
import reddit from '../../../assets/img/Mask Group.png';
import amazon from '../../../assets/img/amazon.png';
import netflix from '../../../assets/img/netflix.png';

const Network = () => {
    return (
        <>
        <div className="bg-gray-100 w-full">
            <div className="max-w-6xl w-full mx-auto py-20 px-6 text-center">
                <p className="font-medium text-4xl leading-10 max-w-sm mx-auto mb-5">
                    Huge Global Network of Fast VPN
                </p>
                <p className="font-normal text-sm leading-10 max-w-lg mx-auto">
                    See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
                </p>
                <img src={Peta} className="w-full block py-10"/>

                <div className="grid grid-cols-5 place-items-center">
                    <div className="justify-center flex items-center">
                        <img src={netflix} width="100"/>
                    </div>
                    <div className="justify-center flex items-center">
                        <img src={reddit} width="100"/>
                    </div>
                    <div className="justify-center flex items-center">
                        <img src={amazon} width="150"/>
                    </div>
                    <div className="justify-center flex items-center">
                        <img src={dc} width="100"/>
                    </div>
                    <div className="justify-center flex items-center">
                        <img src={spotify} width="100"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Network;