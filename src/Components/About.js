import React from 'react'
import { NETFLEX_ICON } from '../utils/constants'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto md:text-base text-[14px]">
    <img src={NETFLEX_ICON} alt='' className='h-20'/>
  
      <p className="text-gray-300 leading-relaxed">
      NetflixGpt is your ultimate destination for exploring a vast collection of movies from various genres and eras. 
        Whether you're a cinephile seeking classic masterpieces or a casual moviegoer in search of the latest releases, 
        we've got you covered.
      </p>
      <p className="text-gray-300 leading-relaxed mt-4">
        Dive into our intuitive interface, where you can search, discover, and explore movies effortlessly. 
        With comprehensive information, trailers, reviews, and more, MovieHub is your go-to platform for all things cinema.
      </p>
      <p className="text-gray-300 leading-relaxed mt-4">
        Get started today and embark on a cinematic journey like never before with Netflix Gpt!
      </p>
        <div className='w-full bg-yellow-400 p-3 text-xl  flex justify-center font-semibold'>
      <h1>
        created by <Link to={"https://github.com/anandhunv"}><span className='text-slate-950'>@Anandhu_N_V </span></Link>
      </h1>

    </div>
    </div> 
  
    </> )
}

export default About