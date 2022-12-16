import React from 'react'

const FormInput = (props) => {
  return (
        <input 
        className='border-2 w-full p-2 rounded-lg my-3 hover:border-blue-300 hover:shadow-xl active:border-blue-500'
        required
        {...props} />
  )
}

export default FormInput
