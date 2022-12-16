import React from 'react'
import { illustration2, vector } from '../../../assets'

const Features = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-32 py-20 px-6 sm:grid-cols-2">
          <div className="hidden sm:block">
            <img src={illustration2} className="block w-full" />
          </div>

          <div className="mx-auto flex max-w-sm flex-col justify-center space-y-2.5">
            <p className="mb-3 text-4xl font-medium leading-10 text-[#0B132A]">
              We Provide Many Features You Can See
            </p>
            <p className="mb-3 text-base leading-8">
              You can explore the features that we Provide with fun and have
              their own functions each features.
            </p>
            <ul>
              <li>
                <div className="inline-flex items-center text-sm leading-8">
                  <div className="mr-3">
                    <img src={vector} width="20" />
                  </div>
                  <p>Powerfull online protection.</p>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-sm leading-8">
                  <div className="mr-3">
                    <img src={vector} width="20" />
                  </div>
                  <p>Internet without borders.</p>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-sm leading-8">
                  <div className="mr-3">
                    <img src={vector} width="20" />
                  </div>
                  <p>Supercharged VPN</p>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-sm leading-8">
                  <div className="mr-3">
                    <img src={vector} width="20" />
                  </div>
                  <p>No specific time limits.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
