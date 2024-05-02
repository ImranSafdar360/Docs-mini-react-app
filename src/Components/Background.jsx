import React from 'react'

const Background = (props) => {
  return (
    <>
    <div className="w-full h-full fixed top-0 left-0 z-[2]">
      <h6 className='absolute left-1/2 top-[5%] translate-x-[-50%] w-full py-10 text-zinc-400 text-center text-[1.2vw] font-semibold'>{props.subtitle}</h6>
      <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] G-bold text-[12vw] text-zinc-900 leading-none tracking-tight'>{props.title}</h1> 
      </div>
    </>
  )
}

export default Background
