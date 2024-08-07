import React from 'react'
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import useVideoTeaser from '../hooks/useVideo';

const VideoPlay = () => {
    const {currentVideoId, currentVideo} = useSelector((state) => state.movies);

    useVideoTeaser(currentVideoId);

  return ( currentVideo? (
    <div className='w-screen bg-black'>
        <iframe
            className='w-screen aspect-video' 
            src= {`https://www.youtube.com/embed/${currentVideo.key}?si=i3sn8_3Zdzo-eMdX&autoplay=1&mute=1`}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
        >
        </iframe>
    </div>
  ): (
    <Shimmer />
  ))
}

export default VideoPlay