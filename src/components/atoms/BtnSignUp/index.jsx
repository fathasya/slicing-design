import React from 'react';

const BtnSignUp = () => {
    return (
            <>
                <div class="flex justify-center">
                    <button 
                    type="button" 
                    className="inline-block px-5 sm:px-7 py-2 
                    font-rubik text-red-600 font-medium text-xs 
                    leading-tight rounded-full border-2 border-red-600
                    hover:bg-red-600 hover:shadow-lg hover:text-white
                    focus:bg-red-600 focus:shadow-lg focus:text-white
                    focus:outline-none focus:ring-0 
                    active:bg-red-800 active:shadow-lg 
                    transition duration-150 ease-in-out">
                        Sign Up
                    </button>
                </div>
            </>
        )
    };

export default BtnSignUp;