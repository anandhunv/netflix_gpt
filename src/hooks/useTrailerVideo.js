import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_ALL_MOVIES, API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/movieSlice";

const useTrailerVideo=(id)=>{

    const trailer_Videos=useSelector(store=>store.movies.trailerVideos)

    const dispatch=useDispatch()


    useEffect(()=>{
     if(!trailer_Videos)   getVideoData();
    },[id])

    const getVideoData=async()=>{
        const data= await fetch(API_ALL_MOVIES+id+'/videos?language=en-US',API_OPTIONS);
        const json=await data.json()
        const filterTrailer=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterTrailer.length ? filterTrailer[0]:json.results[0 ]
        dispatch( addTrailerVideos(trailer))
    }

}

export default useTrailerVideo;