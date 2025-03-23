import React, { useEffect, useState } from 'react'

function ExampleUseEffect() {
    const [image,setImage] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const fetchImage = async ()=>{
        setIsLoading(true)
        const response = await fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
        if( !response.ok) throw new Error("Fetch failed")            
        
        const resjson = await response.json()
       setImage(resjson.message)
       setIsLoading(false)
    }
    useEffect(()=>{
        fetchImage()
    },[])
  return (
    <div className='flex  flex-col gap-10 w-[300px] h-[300px] items-center mx-auto'>
        {isLoading && <div className='fixed  inset-0 w-screen h-screen bg-slate-600/30'>
            <div className='w-5 h-5 border-2 fixed left-1/2 top-1/2 -translate-1/2 border-white border-l-0 border-t-0 rounded-full mx-auto  animate-spin'></div>
        </div>}
        <img src={image} className='w-[300px] h-[300px] object-cover' alt="" />
        <button onClick={()=>{
            fetchImage()
        }} className='bg-green-500 text-white p-2 rounded-md font-bold'>Get image</button>
    </div>
  )
}

export default ExampleUseEffect