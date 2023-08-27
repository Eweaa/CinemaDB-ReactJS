import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css'

const Navbar = () => {

  const navigate = useNavigate()

  const LogOut = () => {
    // localStorage.removeItem("dataKey")
    // localStorage.removeItem("role")
    localStorage.clear()
    navigate('/login')
  }


  return (
    <div className={[NavbarCSS.Nav, 'p-2'].join(' ')}>
        <Link to='/dashboard'>Cinema DB</Link>
        <button onClick={LogOut}>Log Out</button>
        <div>
            <Link to='/actors' className='mx-2'>Actors</Link>
            <Link to='/movies' className='mx-2'>Movies</Link>
            <Link to='/directors' className='mx-2'>Directors</Link>
            <Link to='/actors' className='mx-2'>Tv Series</Link>
        </div>
    </div>
  )
}

export default Navbar