import React from "react";
import Users from "../../molecules/Users";
import Locations from "../../molecules/Locations";
import Servers from "../../molecules/Servers";

const Info = () =>{
    return(
        <>
        <div className="max-w-6xl mx-auto px-6 w-full drop-shadow-lg">
            <div className="w-full sm:py-9 py-5 rounded-xl bg-white border border-gray-100 grid grid-cols-3 place-items-center">
                <Users/>
                <Locations/>                
                <Servers/>
            </div>
        </div>

        </>
    )
}

export default Info;