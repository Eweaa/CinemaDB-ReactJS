import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom';
import AdminLayout from './Layout/Admin/AdminLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Actors from './Pages/Actors/Actors';
import Movies from './Pages/Movies/Movies';
import Directors from './Pages/Directors/Directors';
import UserLayout from './Layout/User/UserLayout';
import Signin from './Authentication/Signin';
import { ProtectedRoute } from './Authentication/ProtectedRoute';
// import ProtectedRoute from './Authentication/ProtectedRoute';
import Home from './Pages/Home/Home';
import { AuthProvider } from './Context/AuthProvider';
import Unauthorized from './Pages/Unauthorized/Unauthorized';

const adminRouter = createBrowserRouter([
  {
    // path: '/',
    element: <ProtectedRoute Role={false} ><AdminLayout /></ProtectedRoute>,
    children:[
      {
        path:'/dashboard',
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
  {
    path: "/Unauthorized",
    element: <Unauthorized />,
  },
])

const userRouter = createBrowserRouter([
  {
    // path:'/',
    element: <ProtectedRoute Role={true}><UserLayout /></ProtectedRoute>,
    children:[
      {
        path:'/home',
        element:<Home />
      }
    ]
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/Unauthorized",
    element: <Unauthorized />,
  },
])

const testRouter = createBrowserRouter([
  {
    // path: '/',
    element: <ProtectedRoute Role={true}><UserLayout /></ProtectedRoute>,
    children:[
      {
        path:'/home',
        element:<Home />
      }
    ]
  },
  {
    // path: '/',
    element: <AdminLayout />,
    children: [
      {
        path:'/dashboard',
        element:<ProtectedRoute Role={false}><Dashboard /></ProtectedRoute> 
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
  {
    path: "/Unauthorized",
    element: <Unauthorized />,
  },
])

const role = JSON.parse(localStorage.getItem('role'))


const fail = () => {
  // const navigate = useNavigate()
  localStorage.removeItem('role')
  localStorage.removeItem('dataKey')
  // navigate('/login')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    {/* <RouterProvider router={role === undefined ? fail() : role ? userRouter : adminRouter} /> */}
    <RouterProvider router={testRouter} />
  </AuthProvider>
);