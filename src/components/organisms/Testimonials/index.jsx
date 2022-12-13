import React from "react";
import Card1 from "../../molecules/Card1";
import Card2 from "../../molecules/Card2";
import Card3 from "../../molecules/Card3";
import union from '../../../assets/img/Union.png';
import bullets from '../../../assets/img/Ellipse 174.png';


const Testimonials = () => {
    return (
        <>
        <div className="bg-gray-100">
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="text-center mb-10 sm:mb-16">
                    <p className="font-medium text-3xl sm:text-4xl mb-5 sm:mb-8 max-w-sm mx-auto">
                        Trusted by Thousands of Happy Customer
                    </p>
                    <p className="font-base text-sm max-w-lg mx-auto">
                        These are the stories of or customer who has joned us with great
                        pleasure when seing this crazy feature.
                    </p>
                </div>

                <div className="grid sm:grid-cols-3 xl:gap-10 sm:gap-3">                    
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>

                <div className="flex justify-center items-center p-10">
                    <img src={union} width="30" className="mr-4"/>
                    <img src={bullets} width="12" className="mr-4"/>
                    <img src={bullets} width="12" className="mr-4"/>
                    <img src={bullets} width="12" className="mr-4"/>
                </div>
            </div>       
        </div>
        </>
    )
}


export default Testimonials;