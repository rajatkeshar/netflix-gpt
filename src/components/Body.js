import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './Login'
import Browse from './Browse'
import NotFound from './NotFound'
import VideoPlay from './VideoPlay'

const Body = () => {
    const appRoutes = createBrowserRouter([
        { path: '/netflix-gpt', element: <Login />},
        { path: '/',            element: <Login /> },
        { path: '/browse',      element: <Browse /> },
        { path: '/video',       element: <VideoPlay />},
        { path: '*',            element: <NotFound />}
    ]);

    return (
        <div>
            <RouterProvider router={appRoutes}/>
        </div>
    )
}

export default Body