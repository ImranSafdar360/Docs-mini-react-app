import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const data = [
    {
      desc:"This is the card that displayed on the screen.",
      filesize:".9mb",
      close:true,
      tag :{
        isOpen:true,
        tagTitle:"Download",
        tagColor:"blue"
      }
    },
    {
      desc:"This is the card that displayed on the screen.",
      filesize:".5mb",
      close:false,
      tag :{
        isOpen:true,
        tagTitle:"Upload",
        tagColor:"green"
      }
    },
    {
      desc:"This is the card that displayed on the screen.",
      filesize:".4mb",
      close:false,
      tag :{
        isOpen:false,
        tagTitle:"Download",
        tagColor:"green"
      }
    }
  ]
  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
       {data.map((item, index) =>(
        <Card data={item} refrence={ref}/>
       ))}  
      </div>
    </>
  )
}

export default Foreground
