import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
        movieTitles: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieResults: (state, action) => {
            const {movieTitles, movieResults} = action.payload;
            state.movieTitles = movieTitles;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGPTSearchView, addGPTMovieResults} = gptSlice.actions;
export default gptSlice.reducer;