import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCurrentVideo} from "../utils/moviesSlice";
import { useEffect } from "react";

const useVideoTeaser = (videoId) => {
    const dispatch = useDispatch();
    const video = useSelector((state) => state.movies.currentVideo);

    const getVideoTeaser = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`, API_OPTIONS);
        const json = await data.json();
        const teasers = json?.results?.filter((video) => video.type === 'Teaser');
        const teaser = (teasers?.length)? teasers[0]: json.results && json.results[0];
        dispatch(addCurrentVideo(teaser))
    }

    useEffect(() => {
        !video && getVideoTeaser();
    }, []);
}

export default useVideoTeaser;