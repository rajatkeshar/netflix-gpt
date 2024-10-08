import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector((state) => state.movies.trailerVideo);

    const getMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        const trailers = json?.results.filter((video) => video.type === 'Trailer');
        const trailer = (trailers.length)? trailers[0]: json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        !trailer && getMovie();
    }, []);
}

export default useMovieTrailer;