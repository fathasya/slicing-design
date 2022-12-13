import React from 'react';
import User from '../../../assets/img/user.png';

const Users = () =>{
    return(
        <div className='w-full flex items-center justify-center sm:space-x-9'>
            <div>
                <img src={User} className='w-7 sm:w-10 mr-5'/>
            </div>
            <div>
                <p className='font-bold text-xs sm:font-bold sm:text-base'>90+</p>
                <p className='font-light sm:font-normal text-xs sm:text-base'>Users</p>
            </div>
        </div>
    )
}

export default Users;