import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar'

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AdminLayout