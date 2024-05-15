import { useDispatch, useSelector } from "react-redux";
import {  API_NOWPLAYING_MOVIES, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{

  const now_playing_Movies=useSelector(store=>store.movies.nowPlayingMovies)


const dispatch =useDispatch()

useEffect(()=>{
  if(!now_playing_Movies) getNowPlayingMovies()
    },[])

    
const getNowPlayingMovies=async()=>{

  const data =await fetch(API_NOWPLAYING_MOVIES,API_OPTIONS);
  const json =await data.json();
  dispatch( addNowPlayingMovies(json.results)
)
}


}

export default useNowPlayingMovies