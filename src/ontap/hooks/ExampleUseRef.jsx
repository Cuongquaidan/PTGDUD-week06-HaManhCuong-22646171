import React, { useRef } from 'react'

function ExampleUseRef() {
    const counter = useRef(0)
    console.log("Component render")
  return (
    <div className='flex gap-5 items-center'>
            <button className='bg-red-500 p-4 text-white text-2xl font-bold' onClick={()=>counter.current--}>-</button>
            <button onClick={()=>{
                console.log(counter.current)
            }}>Log value of counter</button>
            <button className='bg-green-500 p-4 text-white text-2xl font-bold' onClick={()=>counter.current++}>+</button>
    </div>
  )
}

export default ExampleUseRef