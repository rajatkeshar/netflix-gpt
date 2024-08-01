import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
    
    const {movieTitles, movieResults} = useSelector((state) => state.gpt);

    return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
            <div>
                {movieTitles.map((title, index) => <MovieList key={title} title={title} movies={movieResults[index].results}/>)}
            </div>
        </div>
    )
}

export default GPTMovieSuggestions