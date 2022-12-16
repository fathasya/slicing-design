import React from 'react'
import User from '../../../assets/img/user.png'

const Users = () => {
  return (
    <div className="flex w-full items-center justify-center sm:space-x-9">
      <div>
        <img src={User} alt="user-img" className="mr-5 w-7 sm:w-10" />
      </div>
      <div>
        <p className="text-xs font-bold sm:text-base sm:font-bold">90+</p>
        <p className="text-xs font-light sm:text-base sm:font-normal">Users</p>
      </div>
    </div>
  )
}

export default Users
