import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data, reference }) {
  return (
    <motion.div drag dragConstraints={reference } whileDrag={{scale: 1.2}} dragElastic={0.1} className='flex-shrink-0 relative w-48 h-60 rounded-[40px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden' >
       <FaRegFileAlt /> 
       <p className=' text-[11px] mt-5 font-semibold leading-tight'>{data.desc}
       </p>
       <div className='footer absolute bottom-0 w-full left-0'>
      <div className='flex items-center justify-between px-5 mb-1 py-1'>
        <h5 className='text-[12px]'>{data.filesize}</h5>
        <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
          {data.close ? <IoMdClose /> :    <LuDownload size=".7em" color='#fff' />}
        </span>
        
      </div>
      {
        data.tag.isOpen  && (
        <div className={`tag w-full  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-3 flex items-center justify-center`}>
        <h3  className='text-[12px] '>{data.tag.tagTitle}</h3>
       </div>) 
      }
      
       </div>
    </motion.div>
  )
}

export default Card