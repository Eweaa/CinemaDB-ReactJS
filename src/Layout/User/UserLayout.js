import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div>
        This is the user Layout 
        <Outlet />
    </div>
  )
}

export default UserLayout