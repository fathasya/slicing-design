import React from 'react';
import Server from '../../../assets/img/Server.png';

const Servers = () =>{
    return(
        <>
        <div className='inline-flex p-10 items-center justify-center'>
            <div>
                <img src={Server} width="40" className='mr-5'/>
            </div>
            <div>
                <h1><b>50+</b></h1>
                <p>Servers</p>
            </div>
        </div>
        </>
    )
}

export default Servers;