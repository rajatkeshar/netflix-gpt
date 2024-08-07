import React from 'react';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { MOVIES_TYPE } from '../utils/constants';
import useMovies from '../hooks/useMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
import JoyRide from './JoyRide';

const Browse = () => {

    const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

    useMovies(MOVIES_TYPE[0]);
    useMovies(MOVIES_TYPE[1]);
    useMovies(MOVIES_TYPE[2]);
    useMovies(MOVIES_TYPE[3]);
    
    

  return (
      <div>
          <Header />
          <JoyRide />
          { showGPTSearch? (
              <GPTSearch />
          ): (
            <React.Fragment>
                <MainContainer />
                <SecondaryContainer />
            </React.Fragment>  
          )}
      </div>
  )
}

export default Browse