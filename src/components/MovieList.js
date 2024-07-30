import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    return (
        <div className='px-6'>
            <h1 className='text-2xl px-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies?.map((movie) => <MovieCard title = {movie.title} posterPath={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList