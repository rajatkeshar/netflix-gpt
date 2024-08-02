import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = (props) => {
    const { isLoginPage } = props;
    const user = useSelector((state) => state.user);
    const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid, email, displayName, photoURL}));
              navigate('/browse');
            } else {
              dispatch(removeUser());
              navigate('/');
            }
          });

          //unsubscribe when component unmounts
          return () => unsubscribe();
    }, []);

    const HandleLogout = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate('/error');
        });  
    }

    const HandleGPTSearchView = () => {
        dispatch(toggleGPTSearchView());
    }

    const HandleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 md:flex justify-between'>
            <img
                className='w-32 md:w-48' 
                src={LOGO} 
                alt="logo" 
            />
            {user && !isLoginPage &&
                <div>
                    {showGPTSearch && 
                        <select className='p-2 m-2 bg-gray-800 text-white rounded-lg' onChange={HandleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>
                    }
                    <button className='w-28 h-8 rounded-lg text-white bg-purple-500 hover:bg-opacity-80' onClick={HandleGPTSearchView}>{showGPTSearch? "Homepage": "GPT Search"}</button>
                    <span className='text-white'>{user.displayName? ` Welcome, ${user.displayName}`: user.email} </span>
                    <button className=' bg-red-700 w-28 h-8 rounded-lg text-white hover:bg-opacity-80' onClick={HandleLogout}>Sign Out</button>    
                </div>
            }
        </div>
    )
}

export default Header