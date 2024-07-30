import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovies = (type) => {
    const dispatch = useDispatch();

    const getMovies = async (type) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${type}?page=1`, API_OPTIONS);
        const json = await data.json()
        switch (type) {
            case "now_playing":
                dispatch(addNowPlayingMovies(json.results));
                break;
            case "popular": 
                dispatch(addPopularMovies(json.results));
                break;
            case "top_rated":
                dispatch(addTopRatedMovies(json.results));
                break;
            case "upcoming":
                dispatch(addUpcomingMovies(json.results));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        getMovies(type)
    }, [])
}

export default useMovies;