import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import useVideoTeaser from '../hooks/useVideo';
import { changeVideoPage } from '../utils/moviesSlice';
import Header from './Header';

const VideoPlay = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {currentVideoId, currentVideo} = useSelector((state) => state.movies);

  useVideoTeaser(currentVideoId);

  useEffect(() => {
    // Set showVideoPage to false when location changes
    if(location.pathname !== '/video') {
      dispatch(changeVideoPage(false));
    }
}, [location, dispatch]);

  return ( currentVideo? (
    <div>
      <Header isLoginPage={false} />
      <div className='pt-[20%] md:pt-0 bg-black'>
          <iframe
              className='w-screen aspect-video' 
              src= {`https://www.youtube.com/embed/${currentVideo.key}?si=i3sn8_3Zdzo-eMdX&autoplay=1&mute=0`}
              title="YouTube video player"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
          >
          </iframe>
      </div>
    </div>
  ): (
    <Shimmer />
  ))
}

export default VideoPlay