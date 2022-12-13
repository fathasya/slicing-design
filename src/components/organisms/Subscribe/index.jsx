import React from "react";
import BtnSubscribe from "../../atoms/BtnSubscribe";

const Subscribe = () =>{
    return(
        <>
            <div className="bg-gray-100">
                <div className="max-w-6xl mx-auto w-full pb-20 px-6">
                    <div className="bg-white rounded-xl shadow-xl">
                        <div className="block sm:flex p-10 justify-around">
                            <div className="">
                                <p className="font-bold text-xl xl:font-medium xl:text-3xl xl:leading-10">
                                    Subscribe Now for Get Special Features!
                                </p>
                                <p className="font-light text-xs xl:font-normal xl:text-sm leading-10 my-2">
                                    Let's subscribe with us and find the fun.
                                </p>
                            </div>

                            <div className="flex items-center justify-end">
                                <BtnSubscribe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe;