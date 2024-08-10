import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCurrentVideoId, changeVideoPage } from '../utils/moviesSlice';

const ViedoTitle = (props) => {
    const { title, overview, movieId } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleTrailerPlay = () => {
        dispatch(addCurrentVideoId(movieId));
        dispatch(changeVideoPage(true));
        navigate('/video');
    }
    return (
        <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
            <div className='my-2 md:0'>
                <button
                    className='play bg-white text-black p-2 md:p-4 px-6 md:px-12 text-xl rounded-lg hover:bg-opacity-80'
                    onClick={HandleTrailerPlay}
                >
                    ▶ Play
                </button>
                <button 
                    className='more-info mx-2 bg-gray-500 text-white p-2 md:p-4 px-6 md:px-12 text-xl bg-opacity-50 rounded-lg'
                >
                    More Info❗️
                </button>
            </div>
        </div>
    )
}

export default ViedoTitle