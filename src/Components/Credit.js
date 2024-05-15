import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, IMAGE_URL,API_ALL_MOVIES } from '../utils/constants'
import { addCredits } from '../utils/movieSlice'

const Credit = ({id}) => {

    const dispatch =useDispatch()
    const credits=useSelector(store=>store.movies.credits)

    useEffect(()=>{
        getReviews()
    },[id])

    
const getReviews=async()=>{

  const data =await fetch(API_ALL_MOVIES+id+"/credits",API_OPTIONS);
  const results =await data.json();
  dispatch( addCredits(results))
}

if (!credits || !credits.cast) {
  // Render loading state or return null
  return null;
}

const {cast}=credits

  return (


      <div className='md:w-3/12 w-12/12 bg-neutral-950 md:flex md:flex-col flex flex-col  ml-2 rounded-lg md:ml-2 p-2 overflow-x-scroll md:overflow-y-scroll md:text-base text-[12px] md:mb-0 mb-3 ' style={{scrollbarWidth:'none'}}>
        <div>
        <h1 className='text-lg bg-neutral-900 rounded-md w-max px-5 '>Cast</h1>
        </div>
        <div className='md:flex md:flex-col flex '>

          {cast?.map((c)=>{return(
          <div className='md:flex md:flex-row md:p-4 p-2  w-max' key={c.id}>
            <div className='md:p-0 p-1 w-max'>
            <img alt='' className='md:h-32 h-28 rounded-lg'   src={
              c.profile_path
                ? IMAGE_URL + c.profile_path
                : "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"
            }  />
            </div>
            <div className='md:p-2  whitespace-nowrap'>
          <h1 className='text-red-600'>{c?.character}</h1>
           <h1 className='text-gray-50'>{c?.name}</h1>

           </div>
           </div>


      )})}
      </div>
      </div>
       )
}

export default Credit