import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { MOVIES_TYPE } from '../utils/constants';
import useMovies from '../hooks/useMovies';

const Browse = () => {

    useMovies(MOVIES_TYPE[0]);
    useMovies(MOVIES_TYPE[1]);
    useMovies(MOVIES_TYPE[2]);
    useMovies(MOVIES_TYPE[3]);
    
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse