import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = (props) => {
    const { isLoginPage } = props;
    const user = useSelector((state) => state.user);
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
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-48' 
                src={LOGO} 
                alt="logo" 
            />
            {user && !isLoginPage &&
                <div>
                    <span className='text-white'>{user.displayName? `Welcome, ${user.displayName}`: user.email} </span>
                    <button className=' bg-red-700 w-28 h-8 rounded-lg text-white' onClick={HandleLogout}>Sign Out</button>    
                </div>
            }
        </div>
    )
}

export default Header