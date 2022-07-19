import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Videos from '../components/Videos'


const Work = () => {
  return (
    <div>
        <Hero heading='My Work' message ='This is  Some of my recent Works' />
        <Portfolio />
        <Videos />
        
    </div>
  )
}

export default Work