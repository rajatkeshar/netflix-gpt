import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './Login'
import Browse from './Browse'
import NotFound from './NotFound'

const Body = () => {
    const appRoutes = createBrowserRouter([
        { path: '/',        element: <Login /> },
        { path: '/browse',  element: <Browse /> },
        { path: '*',         element: <NotFound />}
    ]);

    return (
        <div>
            <RouterProvider router={appRoutes}/>
        </div>
    )
}

export default Body