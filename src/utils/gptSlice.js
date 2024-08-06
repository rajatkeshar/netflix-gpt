import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
        loading: false,
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
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {toggleGPTSearchView, addGPTMovieResults, setLoading} = gptSlice.actions;
export default gptSlice.reducer;