import React from 'react'
import { Outlet } from 'react-router'
import UNavbar from '../../Components/Navbar/UNavbar/UNavbar'

const UserLayout = () => {
  return (
    <div>
      <UNavbar />
      <Outlet />
    </div>
  )
}

export default UserLayout