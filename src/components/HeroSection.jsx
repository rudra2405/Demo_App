import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export const HeroSection = () => {
  return (
    <div id="herosection" className='flex flex-col items-center mt-6 lg:mt-6'>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        This is Demo Website
        <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text'>
          {'  '}Layout page
        </span>
      </h1>
      <p className="text-center text-lg mt-10 text-neutral-500 max-w-6xl">React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components.</p>
      <div className="flex justify-center my-10">
        <a href='#' className="bg-gradient-to-r from-orange-500 to-red-700 rounded py-3 px-3">Start for Free</a>
        <a href='#' className='py-3 px-3 mx-3 border rounded'>documentation</a>
      </div>
      <div className="flex justify-center items-center mt-10">
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2'>
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2'>
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag
        </video>
      </div>
    </div>
  )
}
