import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Layout/Admin/AdminLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Actors from './Pages/Actors/Actors';
import Movies from './Pages/Movies/Movies';
import Directors from './Pages/Directors/Directors';
import UserLayout from './Layout/User/UserLayout';
import Signin from './Authentication/Signin';
import { ProtectedRoute } from './Authentication/ProtectedRoute';

const result = JSON.parse(localStorage.getItem('role'));

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
    children:[
      {
        path:'/',
        element:<Dashboard />
      },
      {
        path:'/actors',
        element:<Actors />
      },
      {
        path:'/movies',
        element:<Movies />
      },
      {
        path:'/directors',
        element:<Directors />
      },
      {
        path:'/tvseries',
        element:<Dashboard />
      },
    ]
  },
  {
    path: "/login",
    element: <Signin />,
  },
])

const userRouter = createBrowserRouter([
  {
    path:'/',
    element: <ProtectedRoute><UserLayout /></ProtectedRoute>
  },
  {
    path: "/login",
    element: <Signin />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={JSON.parse(localStorage.getItem('role')) ? userRouter : adminRouter} />
);