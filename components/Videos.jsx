import React from 'react';
import Image from 'next/image';


const Videos = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4 drop-shadow-xl'>My Videos </h1>
    <div className='grid grid-rows-none md:grid-col-5 p-4 gap-4 drop-shadow-xl '>
    
        <div className='w-full h-full col-span-2 md:col-span-2 row-span-2 '>
            <video 
            autoPlay loop muted source 
            src='/vid1.mp4'></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/dope_transition.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/wach_trip_main.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/dr strange desk.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/fiverball.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/anime shirigami.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/thor cradles.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>

        <div className='w-full h-full col-span-2 md:col-span-2 row-span-2 '>
            <video 
            autoPlay loop muted source 
            src='/eye pro 4k final.mp4'></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/mobile trip.mp4'   
            width='1080'
            height='1350'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/instagram thief.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/final dr strange.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/educuard helmet.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/clones bargain.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/action vfx wanda.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/production crate.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
        <div className='w-full h-full '>
            <video  autoPlay loop muted source 
            src='/headphones screen.mp4'   
            width='1080'
            height='1920'
            layout='responsive'
            objectFit='cover'
            ></video>
        </div>
    </div>
    </div>


  )
}

export default Videos