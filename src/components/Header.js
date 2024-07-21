import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

const Header = (props) => {
    const { isLoginPage } = props;
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
            dispatch(removeUser());
        }).catch((error) => {
            navigate('/error');
        });  
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-48' 
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
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