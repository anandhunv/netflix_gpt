import React from 'react'
import { IMAGE_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({path,id}) => {
 
 
  return (
    <div className=' bg-black flex mr-1 md:mr-4   rounded-lg '> 
 <Link to={"/watch/"+id}  > 
         <img alt='' src={IMAGE_URL+path} className=' h-32 md:h-48  rounded-lg '/>
        </Link> 
    </div>
  )
}

export default MovieCard