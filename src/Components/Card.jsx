import React from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Card = ({data, refrence}) => {
  return (
    <>
       <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="card w-[18vw] h-[43vh] bg-zinc-900/90 rounded-[40px] cursor-pointer text-white relative px-5 py-8 G-light overflow-hidden flex-shrink-0">
       <FaRegFileLines className="text-xl"/>
       <p className='mt-8 G-light text-md leading-[1.3rem] font-semibold'>{data.desc}</p>
       <div className="footer absolute bottom-0 left-0 w-full">
       <div className="bottom-footer flex justify-between items-center w-full px-5 py-5">
        <h6 className='text-sm font-semibold'>{data.filesize}</h6>
        <span className='w-7 h-7 bg-slate-50 rounded-full text-[#000] flex justify-center items-center cursor-pointer'>
            {data.close ? <IoClose /> : <MdOutlineDownload />}
        </span>
       </div>
       {data.tag.isOpen && (
        <div className={`download text-white text-center py-3 ${data.tag.tagColor === "green" ? "bg-blue-600" : "bg-green-600"}`}>
        <h6 className='G-bold'>{data.tag.tagTitle}</h6>
       </div>
       )}
       </div>
       </motion.div>
    </>
  )
}

export default Card
