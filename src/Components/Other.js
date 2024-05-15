import React from 'react'
import { useSelector } from 'react-redux'

const Other = () => {

    const the_Movie=useSelector(store=>store.movies.singleMovies)

    if (!the_Movie ) {
        // Render loading state or return null
        return null;
      }
      // Assuming the exchange rate from USD to INR is 1 USD = 75 INR
const exchangeRate = 75;
// Convert budget from USD to INR
const budgetInRupees = the_Movie.budget * exchangeRate;
const revenueInRupees = the_Movie.revenue * exchangeRate;

const popularityPercentage = `${the_Movie.popularity.toFixed(2)}%`;


  return (
<div className='p-5 bg-black md:w-6/12 w-12/12  md:aspect-video  rounded-lg  md:text-lg  text-[12px]'>
<h1 className='text-white font-medium md:text-lg  text-[12px]'>Other</h1>

       <div className=' bg-black   md:aspect-video   rounded-lg overflow-y-scroll' style={{scrollbarWidth:'none'}}>
       <div className='m-3'>
        <h1 className='text-white md:text-lg'>Original Title</h1>

        <h1 className='text-yellow-500 md:text-xl'>{the_Movie.original_title}</h1>

        </div>
        <div className='m-3'>
        <h1 className='text-white md:text-lg'>Status</h1>

        <h1 className='text-yellow-500 md:text-xl'>{the_Movie.status}</h1>

        </div>
        <div className='m-3'>
        <h1 className='text-white md:text-lg'> Original_Language</h1>

        <h1 className='text-yellow-500 md:text-xl'>{the_Movie.spoken_languages[0].english_name}</h1>

        </div>

        <div className="text-white m-3">
  <h1 className="md:text-lg text-yellow-500"><span className='text-white'>popularity:</span>{popularityPercentage}</h1>
  <div className="bg-gray-300 h-2 mt-2">
    <div className="bg-green-500 h-full" style={{ width: popularityPercentage }}></div>
  </div>
</div>
        <div className='m-3'>
        <h1 className='text-white md:text-lg'>Budget</h1>

        <h1 className='text-yellow-500 md:text-xl'>{budgetInRupees} INR</h1>

        </div>
        <div className='m-3'>
        <h1 className='text-white md:text-lg'>Revenue</h1>

        <h1 className='text-yellow-500 md:text-xl'>{revenueInRupees} INR</h1>

        </div>

        
      </div>
      </div>  )
}

export default Other