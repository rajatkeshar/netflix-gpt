import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { MOVIES_TYPE, MOVIES_TYPE_MAPPING } from '../utils/constants';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-60 pl-1 md:pl-8 relative z-20'>
        {MOVIES_TYPE.map((type) => <MovieList key={MOVIES_TYPE_MAPPING[type]['title']} title={MOVIES_TYPE_MAPPING[type]['title']} movies={movies[MOVIES_TYPE_MAPPING[type]['reducer']]}/>)}
        {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Treanding"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horor Movies"} movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
  )
}

export default SecondaryContainer