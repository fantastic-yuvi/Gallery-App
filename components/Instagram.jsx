import React from 'react'
import Img1 from '../public/galaxy.jpg';
import Img2 from '../public/landscape.jpg';
import Img3 from '../public/view.jpg';
import Img4 from '../public/sky.jpg';
import InstagramImg from './InstagramImg'
const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'><a className="text-blue-500 hover:underline" href="https://www.instagram.com/fantastic_yuvi/">fantastic_yuvi</a></p>
        <a href="https://www.instagram.com/fantastic_yuvi/">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-4'>
         
            <InstagramImg socialImg={Img1} />
            <InstagramImg socialImg={Img2} />
            <InstagramImg socialImg={Img3} />
            <InstagramImg socialImg={Img4} />
            
          
           
        </div></a>
    </div>
  )
}

export default Instagram