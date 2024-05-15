import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_UPCOMING_MOVIES,} from "../utils/constants";
import {  addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const   useUpComingMovies=()=>{

  const upcoming_Movies=useSelector(store=>store.movies.upComingMovies)

const dispatch =useDispatch()

useEffect(()=>{
 if(!upcoming_Movies)  getUpComingMovies()
    },[])

    
const getUpComingMovies=async()=>{

  const data =await fetch(API_UPCOMING_MOVIES,API_OPTIONS);
  const json =await data.json();
  dispatch( addUpComingMovies(json.results)
)
}


}

export default   useUpComingMovies