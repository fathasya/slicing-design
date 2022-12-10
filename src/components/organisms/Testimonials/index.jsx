import React from "react";
import Card1 from "../../molecules/Card1";
import Card2 from "../../molecules/Card2";
import Card3 from "../../molecules/Card3";
import union from '../../../assets/img/Union.png';
import bullets from '../../../assets/img/Ellipse 174.png';


const Testimonials = () => {
    return (
        <>
        <div className="px-20 py-10 bg-gray-100 w-full">
            <div className="text-center mb-16">
                <p className="font-medium text-4xl mb-8">
                    Trusted by Thousands of <br/> Happy Customer
                </p>
                <p className="font-base text-sm">
                    These are the stories of or customer who has joned us with great
                    <br/> pleasure when seing this crazy feature.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
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
        </>
    )
}


export default Testimonials;