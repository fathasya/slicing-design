import React from "react";
import Gambar from '../../../assets/img/Illustration 2.png';
import List from '../../../assets/img/Vector.png';

const Features = () => {

    return(
        <>
            <div className="grid grid-cols-2 p-20 items-center">
                <div className="mx-20">
                    <img src={Gambar} width="508"/>
                </div>

                <div className="mx-20">
                    <p className="text-4xl font-medium leading-10 mb-3">
                        We Provide Many Features You Can See
                    </p>
                    <p className="text-base leading-8 mb-3">
                        You can explore the features that we Provide with fun and have their own functions each features.
                    </p>
                        <ul>
                            <li>
                                <div className="inline-flex items-center text-sm leading-8">
                                    <div className="mr-3">
                                        <img src={List} width="20"/>
                                    </div>
                                    <p>
                                        Powerfull online protection.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="inline-flex items-center text-sm leading-8">
                                    <div className="mr-3">
                                        <img src={List} width="20"/>
                                    </div>
                                    <p>
                                        Internet without borders.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="inline-flex items-center text-sm leading-8">
                                    <div className="mr-3">
                                        <img src={List} width="20"/>
                                    </div>
                                    <p>
                                        Supercharged VPN
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="inline-flex items-center text-sm leading-8">
                                    <div className="mr-3">
                                        <img src={List} width="20"/>
                                    </div>
                                    <p>
                                        No specific time limits.
                                    </p>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </>

    )
}

export default Features;