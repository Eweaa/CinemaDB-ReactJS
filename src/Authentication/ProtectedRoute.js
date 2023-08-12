import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const verify = localStorage.getItem("dataKey")

    if(verify === null || verify === undefined)
    return <Navigate to='/login' />

    if(verify !== null && verify !== undefined)
    return children
}