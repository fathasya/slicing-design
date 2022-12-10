import React from "react";
import Users from "../../molecules/Users";
import Locations from "../../molecules/Locations";
import Servers from "../../molecules/Servers";

const Info = () =>{
    return(
        <>
        <div className="w-3/4 mx-36 rounded shadow-lg ">
            <div className="grid grid-cols-3 flex justify-around">
                <Users/>
                <Locations/>                
                <Servers/>
            </div>
            {/* <div className="grid-cols-4">
                <Users/>
            </div>
            <div className="grid-cols-4">
                <Locations/>
            </div>
            <div className="grid-cols-4">
                <Servers/>
            </div>         */}
        </div>

        </>
    )
}

export default Info;