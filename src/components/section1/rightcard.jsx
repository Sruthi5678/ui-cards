import React from 'react'
import { ArrowRight } from 'lucide-react'
import Rightcardcontent from './rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 relative rounded-4xl overflow-hidden flex shrink-0'>
      <img
        src={props.img}
        className='h-full w-full object-cover'
        alt=""
      />

      <Rightcardcontent tage={props.tage} num={props.num} />
    </div>
  )
}

export default Rightcard