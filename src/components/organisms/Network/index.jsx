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
            <div className="justify-center text-center p-10">
                <p className="font-medium text-4xl mb-4">
                    Huge Global Network <br/>
                    of Fast VPN
                </p>
                <p className="font-normal text-sm">
                    see <b>LaslesVPN</b> everywhere to make it easier for you when you move <br/> locations.
                </p>
            </div>
            
            <div className="w-full p-20 justify-center items-center text-center inline-flex">
                <center>
                    <img src={Peta} width="900"/>
                </center>
            </div>

                <div className="grid grid-cols-5 pt-10 pb-20 px-20">
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
        </>
    )
}


export default Network;