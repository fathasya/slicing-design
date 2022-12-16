import React, { useState } from 'react'
import { FormInput } from '../../molecules'
import BtnSubmit from '../../atoms/BtnSubmit'

const Form = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
        'email: ' +
        inputs.email +
        '\nnama depan: ' +
        inputs.namaDepan +
        '\nnama belakang: ' +
        inputs.namaBelakang +
        '\nisi pesan: ' +
        inputs.pesan
    )

    console.log(inputs)
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto flex w-full max-w-6xl justify-center px-6 pb-20">
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full rounded-lg bg-white p-10 shadow-lg"
          >
            <p className="mb-4 text-center text-2xl font-bold uppercase text-gray-700">
              Kirim Pesan
            </p>
            <FormInput
              type="email"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
              placeholder="Email"
            />
            <div className="grid-cols-2 gap-3 sm:flex">
              <FormInput
                type="text"
                name="namaDepan"
                value={inputs.namaDepan || ''}
                onChange={handleChange}
                placeholder="Nama Depan"
              />
              <FormInput
                type="text"
                name="namaBelakang"
                value={inputs.namaBelakang || ''}
                onChange={handleChange}
                placeholder="Nama Belakang"
              />
            </div>
            <textarea
              name="pesan"
              value={inputs.pesan || ''}
              placeholder="Isi Pesan"
              rows={`5`}
              onChange={handleChange}
              className="my-3 w-full rounded-lg border-2 p-2 hover:border-blue-300 hover:shadow-xl"
              required
            />
            <BtnSubmit />
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
