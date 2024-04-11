import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "Maths Notes ",
      filesize: ".9mb",
      close: false,
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "English theory class 7 ",
      filesize: "1mb",
      close: true,
      tag: {isOpen:false, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Previous Year Question Papers",
      filesize: ".9mb",
      close: false,
      tag: {isOpen:true, tagTitle: "Upload", tagColor: "green"},
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 p-5 flex-wrap'>
      {data.map((item, index)=>(
      <Card data={item} reference={ref}/>
      ))}
      
    </div>
  )
}

export default Foreground