import React from 'react'
import { useSelector } from 'react-redux'
import ViedoTitle from './ViedoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    //console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

    return (
        <div className='pt-[20%] md:pt-0 bg-black'>
            <ViedoTitle title={original_title} overview={overview} movieId={id}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer