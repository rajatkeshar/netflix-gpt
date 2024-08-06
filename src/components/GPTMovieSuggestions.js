import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer'

const GPTMovieSuggestions = () => {

    const { movieTitles, movieResults, loading } = useSelector((state) => state.gpt);

    return (
        loading ? <Shimmer /> : ( movieTitles && movieResults && movieTitles.map((title, index) => <MovieList key={`${title}_${index}`} title={title} movies={movieResults[index].results} />))
    )
}

export default GPTMovieSuggestions