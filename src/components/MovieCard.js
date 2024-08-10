import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrentVideoId, changeVideoPage } from '../utils/moviesSlice';

const MovieCard = ({title, posterPath, movieId}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if(!posterPath) return;

  const HandleVideoPlay = () => {
    dispatch(addCurrentVideoId(movieId));
    dispatch(changeVideoPage(true));
    navigate('/video');
  }

  return (
    <div className='w-36 md:w-48 p-2'>
        <Link to="/video" onClick={HandleVideoPlay}><img alt={title} src={`${IMG_CDN_URL}/${posterPath}`} /></Link>
    </div>
  )
}

export default MovieCard