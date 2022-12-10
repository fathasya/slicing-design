import React from "react";
import img from '../../../assets/img/Free.png';
import list from '../../../assets/img/Vector 2.png';
import BtnSelect from "../../atoms/BtnSelect";

const Premiun = () => {
    return (
        <>
        <div className="py-10 text-center justify-center items-center border-2 rounded border-gray-300 hover:border-red-600">
            <div className="flex justify-center mb-5">
                <img src={img} width="145"/>
            </div>

            <b>Premiun Plan</b>
            <div className="px-12 text-start mt-3 ml-3 mb-12">
                <ul>
                    <li>
                        <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Unlimited Bandwitch    
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Encrypted Connection    
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                No Traffic Logs    
                            </p>
                        </div>
                    </li>

                    <li>
                    <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Works on All Devices
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Connect Anywhere
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <div className="inline-flex justify-center items-center leading-8 text-sm">
                            <div>
                                <img src={list} alt="list" width="10" className="mr-3"/>
                            </div>
                            <p>
                                Get New Features    
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="m-5">
                <p>
                    <b> $12 </b>
                    <span className="text-gray-500"> / mo </span>
                </p>
            </div>
            <BtnSelect/>
        </div>
        </>
    )
}

export default Premiun;