import React from 'react';
import User from '../../../assets/img/user.png';

const Users = () =>{
    return(
        <div className='inline-flex p-10 items-center justify-center'>
            <div>
                <img src={User} width="40" className='mr-5'/>
            </div>
            <div>
                <h1><b>90+</b></h1>
                <p>Users</p>
            </div>
        </div>
    )
}

export default Users;