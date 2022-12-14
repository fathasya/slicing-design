import React from 'react'
import img from '../../../assets/img/Free.png'
import list from '../../../assets/img/Vector 2.png'
import BtnSelect from '../../atoms/BtnSelect'

const Free = () => {
  return (
    <>
      <div className="items-center justify-center rounded border-2 border-gray-300 py-10 text-center hover:border-red-600">
        <div className="mb-5 flex justify-center">
          <img src={img} width="145" />
        </div>

        <b>Free Plan</b>
        <div className="mt-3 ml-3 mb-10 px-12 text-start sm:mb-20 sm:px-5 xl:px-12">
          <ul>
            <li>
              <div className="inline-flex items-center justify-center sm:text-xs xl:text-sm xl:leading-8">
                <div>
                  <img src={list} alt="list" width="10" className="mr-3" />
                </div>
                <p>Unlimited Bandwitch</p>
              </div>
            </li>

            <li>
              <div className="inline-flex items-center justify-center sm:text-xs xl:text-sm xl:leading-8">
                <div>
                  <img src={list} alt="list" width="10" className="mr-3" />
                </div>
                <p>Encrypted Connection</p>
              </div>
            </li>

            <li>
              <div className="inline-flex items-center justify-center sm:text-xs xl:text-sm xl:leading-8">
                <div>
                  <img src={list} alt="list" width="10" className="mr-3" />
                </div>
                <p>No Traffic Logs</p>
              </div>
            </li>

            <li>
              <div className="inline-flex items-center justify-center sm:mb-2 sm:text-xs xl:mb-8 xl:text-sm xl:leading-8">
                <div>
                  <img src={list} alt="list" width="10" className="mr-3" />
                </div>
                <p>Works on All Devices</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="m-5">
          <p>
            <b> Free </b>
          </p>
        </div>

        <BtnSelect />
      </div>
    </>
  )
}

export default Free
