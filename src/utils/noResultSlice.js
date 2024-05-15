import { createSlice } from "@reduxjs/toolkit";

const noResultSlice=createSlice({
    name:'noResult',
    initialState:{
        showResult:false,
    },
    reducers:{
        toggleShowResult:(state)=>{
            state.showResult=!state.showResult;
        },
    }

})

export const {toggleShowResult} =noResultSlice.actions
export default noResultSlice.reducer;