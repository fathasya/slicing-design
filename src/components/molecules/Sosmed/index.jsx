import React from 'react'
import fb from '../../../assets/img/Facebook.png'
import twitter from '../../../assets/img/Twitter.png'
import ig from '../../../assets/img/Instagram.png'

const Sosmed = () => {
  return (
    <>
      <div className="flex items-center">
        <img src={fb} width="50" alt="Facebook" />
        <img src={twitter} width="50" alt="Twitter" />
        <img src={ig} width="50" alt="Instagram" />
      </div>
    </>
  )
}

export default Sosmed
