import React from 'react'
import { testimonials } from './index.jsx'

export const Testimonial = () => {
  return (

    <div id='testimonials' className="my-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((items, index) => {
          return <div key={index} className="w-full lg:w-1/3 sm:w-1/2 py-4 px-4">
            <div className=" bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{items.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={items.image}
                  alt=""
                />
                <div>
                  <h6>{items.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {items.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

