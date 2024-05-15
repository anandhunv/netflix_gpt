import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,

        movieName:null,
        movieResults:null     },
    reducers:{
      toggleShowGptSearch:(state)=>{
        state.showGptSearch=!state.showGptSearch;
    },
    addGptMoviesResults:(state,action)=>{
        const {movieName,movieResults}=action.payload
        state.movieName=movieName
        state.movieResults=movieResults

    }
}
})

export const {toggleShowGptSearch,addGptMoviesResults} =gptSlice.actions
export default gptSlice.reducer;