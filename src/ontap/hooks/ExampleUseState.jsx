import React, { useState } from 'react'
    
function ExampleUseState() {
    const [count,setCount] = useState(0);
    return (
        
        <div className='flex gap-5 items-center'>
            <button className='bg-red-500 p-4 text-white text-2xl font-bold' onClick={()=>setCount((prev)=>prev-1)}>-</button>
            <div>{count}</div>
            <button className='bg-green-500 p-4 text-white text-2xl font-bold' onClick={()=>setCount((prev)=>prev+1)}>+</button>
        </div>
    )
}
    
export default ExampleUseState