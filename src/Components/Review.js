import React, { useEffect } from 'react'
import { API_ALL_MOVIES, API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addReviews } from '../utils/movieSlice'

const Review = ({id}) => {

    const dispatch =useDispatch()
    const reviews=useSelector(store=>store.movies.reviews)

    useEffect (()=>{
        getReviews()
    },[id])

    
const getReviews=async()=>{

  const data =await fetch(API_ALL_MOVIES+id+"/reviews",API_OPTIONS);
  const results =await data.json();
  dispatch( addReviews(results))
}

        const review=reviews?.results
  return (
    <div className="p-4">
  {review && review.length > 0 ? (
    review.map((review) => (
      <div className="bg-neutral-950 rounded-lg text p-1 m-4" key={review.author}>
        <h1 className="text-emerald-700">{review.author}</h1>
        <p className="text-zinc-300">{review.content}</p>
      </div>
    ))
  ) : (
    <div className="bg-neutral-950 rounded-lg text p-4 m-4">
      <p className="text-emerald-700">No reviews available</p>
    </div>
  )}
</div>

  )
}

export default Review