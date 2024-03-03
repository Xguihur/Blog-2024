import React from 'react';
import {createBrowserRouter,redirect} from 'react-router-dom'

import Label from '../pages/Label/index.jsx'
import Charts from '../pages/Charts/index.jsx'
import Upload from '../pages/Upload/index.jsx'
import Home from '../pages/Home/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    redirect: '/home',
    element: <Label />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/charts',
        element: <Charts />
      },
      {
        path: '/upload/:type',
        element: <Upload />
      }
    ]
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
])

export default router