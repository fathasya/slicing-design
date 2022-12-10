import React from "react";
import BtnSubscribe from "../../atoms/BtnSubscribe";

const Subscribe = () =>{
    return(
        <>
        <div className="bg-gray-100 pb-20">
            <div className="mx-36 bg-white rounded shadow-lg">
                <div className="grid grid-cols-2" >
                    <div className="p-8">
                        <p className="font-medium text-3xl leading-10">
                            Subscribe Now for 
                            <br/> Get Special Features!
                        </p>
                        <p className="font-normal text-sm leading-10 mt-2">
                            Let's subscribe with us and find the fun.
                        </p>
                    </div>

                    <div className="flex items-center justify-end p-10">
                        <BtnSubscribe/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe;