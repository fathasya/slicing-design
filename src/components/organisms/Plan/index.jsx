import React from "react";
import Free from "../../molecules/Free";
import Standard from "../../molecules/Standard";
import Premiun from "../../molecules/Premium";

const Plan = () => {
    return (
        <>
            <div className="p-20 text-center bg-gray-100 ">
                <div className="justify-center items-center pb-16">
                    <p className="font-medium text-3xl leading-10 mb-5">
                        Choose Your Plan
                    </p>
                    <p className="text-base font-normal font-rubik">
                        Let's choose the package that is best for you and explore it happily and cheerfully
                    </p>
                </div>
                <div className="mx-20 grid grid-cols-3 gap-10">
                    <Free />
                    <Standard />
                    <Premiun />
                </div>
            </div>
        </>
    )
}

export default Plan;