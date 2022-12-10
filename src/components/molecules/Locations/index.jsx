import React from 'react';
import Location from '../../../assets/img/location.png';

const Locations = () =>{
    return(
        <>
            <div className='inline-flex p-10 items-center justify-center'>
                <div>
                    <img src={Location} width="40" className='mr-5'/>
                </div>
                <div>
                    <b>30+</b>
                    <p>Locations</p>
                </div>
            </div>
        </>
    )
}

export default Locations;