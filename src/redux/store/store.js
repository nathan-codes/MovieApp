import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "../features/movieOSlice";
const store = configureStore({
    reducer: {
        movieoData: movieoReducer
    }
})

export default store