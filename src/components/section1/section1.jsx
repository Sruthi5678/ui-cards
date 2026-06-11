import React from 'react'
import Navbar from './navbar'
import P1content from './p1content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      <Navbar />
      <P1content users={props.users} />
    </div>
  )
}

export default Section1