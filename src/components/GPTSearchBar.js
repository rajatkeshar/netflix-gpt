import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { language } from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResults } from '../utils/gptSlice';

const GPTSearchBar = () => {

    const identifier = useSelector((state) => state.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTMDBMovies = async (title) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
        const movies = await fetch(url, API_OPTIONS);
        const json = movies.json();
        return json;
    }

    const HandleGPTSearchClick = async () => {
        const GPTQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies in comma saperated like the example given ahed. example result: Gadar, Don, Golmal, Koi Mil Gaya.`;

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: GPTQuery }],
        });

        const content = chatCompletion?.choices[0]?.message?.content;
        const gptMovieSuggestions = content.split(',');

        console.log("chatCompletion: ", gptMovieSuggestions);

        const pArray = gptMovieSuggestions.map((movie) => searchTMDBMovies(movie));
        const tmdbMovies = await Promise.all(pArray);
        console.log(tmdbMovies);

        dispatch(addGPTMovieResults({movieTitles: gptMovieSuggestions, movieResults: tmdbMovies}))
    };

    return (
            <div className='pt-[10%] flex justify-center'>
                <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=> e.preventDefault()}>
                    <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={language[identifier]['placeHolder']}/>
                    <button className='col-span-3 m-4 p-2 px-4 bg-red-700 text-white rounded-lg' onClick={HandleGPTSearchClick}>{language[identifier]['search']}</button>
                </form>
            </div>
    )
}

export default GPTSearchBar