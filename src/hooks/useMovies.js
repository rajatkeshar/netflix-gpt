import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_TYPE_MAPPING } from "../utils/constants";

const useMovies = (type) => {
    const dispatch = useDispatch();
    const moviesType = useSelector((state) => state?.movies[MOVIES_TYPE_MAPPING[type]['reducer']]);

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
        !moviesType && getMovies(type)
    }, [])
}

export default useMovies;