import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const P1content = (props) => {
  return (
    <div className='py-9 h-[70vh] px-18 flex items-center gap-10'>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default P1content