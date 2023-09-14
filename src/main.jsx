import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Normal from './component/Normal.jsx'
import Admin from './component/Admin.jsx'
import Owner from './component/owner.jsx'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', 
    element:<App/>,  
  },
  {
    path:'/normal',
    element: <Normal />,
  },
  {
    path: '/admin',
    element: <Admin  />,
  },
  {
    path: '/owner',
    element: <Owner />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
