import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        singleMovies:null,
        videos:null,
        reviews:null,
        credits:null,



    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideos=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        },
        addSingleMovies:(state,action)=>{
            state.singleMovies=action.payload
        },
        addVideos:(state,action)=>{
            state.videos=action.payload
        },
        addReviews:(state,action)=>{
            state.reviews=action.payload
        },
        addCredits:(state,action)=>{
            state.credits=action.payload
        },
        

    }
})


export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRatedMovies,addUpComingMovies,addSingleMovies,addVideos,addReviews,addCredits}=movieSlice.actions;
export default movieSlice.reducer;




