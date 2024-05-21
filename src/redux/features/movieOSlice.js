import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData:[],
    imageURL:""
}


export const movioOSlice = createSlice({
    name: "movieO",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageURL: (state, action) => {
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData,setImageURL } = movioOSlice.actions
export default movioOSlice.reducer