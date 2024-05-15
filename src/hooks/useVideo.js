import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_ALL_MOVIES, API_OPTIONS } from "../utils/constants";
import {  addVideos } from "../utils/movieSlice";

const useVideo=(id)=>{

    const trailer_Videos=useSelector(store=>store.movies.videos)

    const dispatch=useDispatch()


    useEffect(() => {
        if (!trailer_Videos) getVideoData();
    
        // Cleanup function
        return () => {
          // Dispatch an action to reset videos when unmounting or navigating away
          dispatch(addVideos(null));
        };
      }, [id]);
    

    const getVideoData=async()=>{
        const data= await fetch(API_ALL_MOVIES+id+'/videos?language=en-US',API_OPTIONS);
        const json=await data.json()
        const filterTrailer=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterTrailer.length ? filterTrailer[0]:json.results[0 ]
        dispatch( addVideos(trailer))
    }

}

export default useVideo;