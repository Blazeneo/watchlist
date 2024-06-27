import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./redux/moviereducer";



export const store =configureStore({
    reducer:{movieReducer}
})
