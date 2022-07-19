import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
        {/*overlay*/}
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-[2]'/>
        <div className=' p-5 text-white z-[2]  mt-[-10rem]'>
            <h2 className='text-5xl font-bold hover:scale-105 duration-300'>{heading}</h2> 
            <p className='py-5 text-xl hover:scale-105 duration-300'>{message}</p>
            <a href="https://mailto:me.ysgangwarfbd2001@gmail.com">
            <button className='px-8 py-2 border hover:scale-125 duration-300 '>Book</button></a>
        </div>
    </div>
  )
}

export default Hero