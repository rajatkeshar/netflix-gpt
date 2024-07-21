import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const appRoutes = createBrowserRouter([
        { path: '/',        element: <Login /> },
        { path: '/browse',  element: <Browse /> }
    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid, email, displayName, photoURL}));
            } else {
              dispatch(removeUser());
            }
          });
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={appRoutes}/>
        </div>
    )
}

export default Body