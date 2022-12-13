import React from "react";
import Free from "../../molecules/Free";
import Standard from "../../molecules/Standard";
import Premiun from "../../molecules/Premium";

const Plan = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-6xl w-full mx-auto py-20 px-6 text-center ">
                    <div className="justify-center items-center pb-16">
                        <p className="font-medium text-4xl leading-10 mb-5">
                            Choose Your Plan
                        </p>
                        <p className="text-base font-normal font-rubik max-w-lg mx-auto">
                            Let's choose the package that is best for you and explore it happily and cheerfully
                        </p>
                    </div>
                    <div className="mx-5 xl:mx-20 sm:mx-10 grid sm:grid-cols-3 xl:gap-10 sm:gap-5">
                        <Free />
                        <Standard />
                        <Premiun />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan;