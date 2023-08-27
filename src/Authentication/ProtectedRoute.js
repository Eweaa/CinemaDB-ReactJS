import React from "react";
import { Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export const ProtectedRoute = ({Role, children}) => {
    const verify = localStorage.getItem("dataKey");
    const role = JSON.parse(localStorage.getItem("role"));
    const navigate = useNavigate();

    if(verify === null || verify === undefined)
    return <Navigate to='/login' />

    if(verify !== null && verify !== undefined)
    {
      if(Role === role){
        // console.log('Role: ', Role)
        // console.log('dataKey: ', verify)
        // console.log(`it's supposed to work`)
        return children
      }
      else{
        navigate('/Unauthorized')
        // console.log('this is should be unauthorized')
        // console.log('Role: ', Role)
        // console.log('role: ', role)
      }
    }
}

// const ProtectedRoute = ({ Role }) => {

//     const { auth } = useAuth();
//     const location = useLocation();

//   return (
//     auth?.roles == Role ? <Outlet /> : auth?.roles ? <Navigate to='/Unauthorized' state={{ from: location }} replace /> : <Navigate to='/login' state={{ from: location }} replace />
//   )
// }

// export default ProtectedRoute