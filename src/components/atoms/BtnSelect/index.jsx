import React from 'react';

const BtnSelect = (props) => {
    return (
            <>
                <div class="flex space-x-2 justify-center">
                    <button 
                    type="button" 
                    className="inline-block px-7 py-2 
                    font-rubik text-red-600 font-medium text-xs 
                    leading-tight rounded-full border-2 border-red-600
                    hover:bg-red-600 hover:shadow-lg hover:text-white
                    focus:bg-red-600 focus:shadow-lg focus:text-white
                    focus:outline-none focus:ring-0 
                    active:bg-red-800 active:shadow-lg 
                    transition duration-150 ease-in-out">
                        <h1>
                            Select
                        </h1>
                    </button>
                </div>
            </>
        )
    };

export default BtnSelect;