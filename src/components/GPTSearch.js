import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMAGE } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img className="h-screen object-cover" src={BG_IMAGE} alt='background' />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch