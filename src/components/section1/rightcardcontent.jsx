import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
      <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-semibold'>
        {props.num}
      </h2>

      <div>
        <p className='mt-60 text-xl leading-normal text-white'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit reprehenderit porro reiciendis iure iusto officiis.
        </p>
      </div>

      <div className='flex justify-between'>
        <button className='bg-blue-600 text-lg text-white py-2 rounded-full px-7 font-semibold'>
          {props.tage}
        </button>

        <button className='bg-blue-600 text-lg text-white py-2 rounded-full px-4'>
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Rightcardcontent