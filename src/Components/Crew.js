import React from 'react'
import { useSelector } from 'react-redux'
import { IMAGE_URL, IMG_NOT_AVAILABLE } from '../utils/constants'

const Crew = () => {
    const credits=useSelector(store=>store.movies.credits)

    if (!credits || !credits.crew) {
        // Render loading state or return null
        return null;
      }
      
    
    const {crew}=credits


  return (
    <>
   {crew?.map((c,index) => {
        const randomKey = Math.floor(Math.random() * 1000) + 1;

    return (
      <div className="p-2 m-1 flex flex-col w-max" key={`crew_${c.id}_${randomKey}`}>
        <div className="p-1 w-max">
          <img
            alt="img"
            className="rounded-lg md:h-32 h-28"
            src={
              c.profile_path
                ? IMAGE_URL + c.profile_path
                : IMG_NOT_AVAILABLE
            }
          />
        </div>
        <div className="p-2  w-auto h-max">
          <h1 className="text-gray-50 text-[13px]">{c?.name}</h1>
          <h1 className="text-red-600 text-[13px]">{c?.job}</h1>
        </div>
      </div>
    );
  })}
    </> )
    
}

export default Crew