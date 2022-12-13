import React from "react";

const BtnSubscribe = (props) => {
    return (
            <>
                <div>
                    <button 
                    type="button" 
                    className="inline-block px-10 py-3 
                    font-rubik bg-red-600 text-white font-medium text-md 
                    leading-tight rounded shadow-lg
                    hover:bg-white hover:shadow-lg hover:text-red-600
                    focus:bg-red-600 focus:shadow-lg focus:text-white
                    focus:outline-none focus:ring-0 
                    active:bg-red-800 active:shadow-lg 
                    transition duration-150 ease-in-out">
                        <p>
                            Subscribe Now
                        </p>
                    </button>
                </div>
            </>
        )
    };

export default BtnSubscribe;