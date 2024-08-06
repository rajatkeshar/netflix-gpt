import React from 'react'
import { BG_IMAGE } from '../utils/constants'

const NotFound = () => {
  return (
    <div>
        <div>
            <img className=" fixed -z-10 object-cover" src={BG_IMAGE} alt='background' />
        </div>
        <div>
            <h1 className='px-60 py-80 text-3xl text-white'>404, NotFound!</h1>
        </div>
    </div>
  )
}

export default NotFound