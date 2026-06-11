import React from 'react'
import Rightcard from './rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-10 w-2/3 p-3'>
      {props.users.map(function (elem, index) {
        return <Rightcard key={index} img={elem.img} tage={elem.tage} num={elem.num}/>
      })}
    </div>
  )
}

export default Rightcontent