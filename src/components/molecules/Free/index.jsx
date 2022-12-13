import React from "react";
import img from '../../../assets/img/Free.png';
import list from '../../../assets/img/Vector 2.png';
import BtnSelect from "../../atoms/BtnSelect";

const Free = () => {
    return (
        <>
        <div className="py-10 text-center justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">
            <div className="flex justify-center mb-5">
                <img src={img} width="145"/>
            </div>

            <b>Free Plan</b>
            <div className="px-12 xl:px-12 sm:px-5 text-start mt-3 ml-3 mb-10 sm:mb-20">
                <ul>
                    <li>
                        <div className="inline-flex justify-center items-center xl:leading-8 xl:text-sm sm:text-xs">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Unlimited Bandwitch    
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="inline-flex justify-center items-center xl:leading-8 xl:text-sm sm:text-xs">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Encrypted Connection    
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <div className="inline-flex justify-center items-center xl:leading-8 xl:text-sm sm:text-xs">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                No Traffic Logs    
                            </p>
                        </div>
                    </li>

                    <li>
                    <div className="inline-flex justify-center items-center xl:leading-8 xl:text-sm xl:mb-8 sm:mb-2 sm:text-xs">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Works on All Devices
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="m-5">
                <p >
                    <b> Free </b>
                </p>
            </div>

            <BtnSelect/>
        </div>
        </>
    )
}

export default Free;