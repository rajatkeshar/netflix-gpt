import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstants';

const GPTSearchBar = () => {

    const identifier = useSelector((state) => state.config.lang);

    return (
            <div className='pt-[10%] flex justify-center'>
                <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
                    <input className='p-4 m-4 col-span-9' type='text' placeholder={language[identifier]['placeHolder']}/>
                    <button className='col-span-3 m-4 p-2 px-4 bg-red-700 text-white rounded-lg'>{language[identifier]['search']}</button>
                </form>
            </div>
    )
}

export default GPTSearchBar