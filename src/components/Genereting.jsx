import React from 'react'
import { loading } from '../assets'

const Genereting = ({className}) => {
  return (
    <div className={`flex item-center h-[3.5rem] px-6 py-4 bg-n-8/80 rounded-[1.7rem] ${className ||''} text-base` }>
      <img
        className='w-5 h-5 mr-4'
        src={loading} 
        alt="Loading" />
        AI is Generating
    </div>
  )
}

export default Genereting
