import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TOPRATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const   useTopRatedMovies=()=>{
  const top_Rated_Movies=useSelector(store=>store.movies.topRatedMovies)



const dispatch =useDispatch()

useEffect(()=>{

    if(!top_Rated_Movies)      getTopRatedMovies()
    },[])

    
const getTopRatedMovies=async()=>{

  const data =await fetch(API_TOPRATED_MOVIES,API_OPTIONS);
  const json =await data.json();
  dispatch( addTopRatedMovies(json.results)
)
}


}

export default   useTopRatedMovies