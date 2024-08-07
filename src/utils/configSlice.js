import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        onBoarding: true
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        },
        setOnBoarding: (state, action) => {
            state.onBoarding = action.payload
        }
    }
})

export const {changeLanguage, setOnBoarding} = configSlice.actions
export default configSlice.reducer;