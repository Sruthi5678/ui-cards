import React from 'react'
import hero from './hero'
import arrow from './arrow'

const leftcontent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between  '>
       {hero()}
       {arrow()}
    </div>
  )
}

export default leftcontent
