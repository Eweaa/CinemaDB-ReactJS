import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UNavCSS from './UNavbar.module.css';

const UNavbar = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('dataKey');        
        localStorage.removeItem('role');
        navigate('/login')
    }

  return (
    <nav className={[UNavCSS.UNav, 'p-2'].join(' ')}>
        <div>
            <Link to='/'>Cinema DB</Link>
            <Link></Link>
            <Link></Link>
        </div>
        <div style={{width:'50%'}}>
            <input type='text' placeholder='Search'/>
        </div>
        <div>
            <button onClick={logout}>Exit</button>
        </div>
    </nav>
  )
}

export default UNavbar