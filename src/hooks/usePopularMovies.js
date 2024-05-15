import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_POPULAR_MOVIES } from "../utils/constants";
import { addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";


const   usePopularMovies=()=>{

  const popular_Movies=useSelector(store=>store.movies.popularMovies)

const dispatch =useDispatch()

useEffect(()=>{
  if(!popular_Movies)    getPopularMovies()
    },[])

    
const getPopularMovies=async()=>{

  const data =await fetch(API_POPULAR_MOVIES,API_OPTIONS);
  const json =await data.json();
  dispatch( addPopularMovies(json.results)
)
}


}

export default  usePopularMovies;
