import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import noResultSlice from "./noResultSlice";




const appStore=configureStore(
    {
        reducer:{
            user:userSlice,
            movies:movieSlice,
            gpt:gptSlice,
            config:configSlice,
            noResult:noResultSlice

        }
    }
    )


    export default appStore;