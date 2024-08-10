import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        currentVideoId: null,
        currentVideo: null,
        showVideoPage: false
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addCurrentVideoId: (state, action) => {
            state.currentVideoId = action.payload;
        },
        addCurrentVideo: (state, action) => {
            state.currentVideo = action.payload;
        },
        changeVideoPage: (state, action) => {
            state.showVideoPage = action.payload;
        } 
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo, addCurrentVideoId, addCurrentVideo, changeVideoPage} = moviesSlice.actions;
export default moviesSlice.reducer;