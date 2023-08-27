import axios from '../api/axios';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginCSS from './Singin.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import useAuth from './useAuth';
import useAuth from '../Hooks/useAuth';
const LOGIN_URL = '/api/Security/GetUserQuery?';



const Signin = () => {
    
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const EmailRef = useRef();
    const PasswordRef = useRef();

    const [error, setError] = useState(false);

    useEffect(() => {
        // window.history.replaceState({}, document.title)
        EmailRef.current.focus();
    }, [])

    const Signin = async () => {
        axios.get(`${LOGIN_URL}Name=${EmailRef.current.value}&Password=${PasswordRef.current.value}`).then(res => {
            const data = res.data
            // console.log(data)
            if(data.token === undefined)
            {
                setError(true)
                EmailRef.current.value = ''
                PasswordRef.current.value = ''
            }
            else
            {
                const accessToken = res?.data?.token;
                const roles = res?.data?.role;
                setAuth({ roles, accessToken });
                localStorage.setItem('role', JSON.stringify(data.role));
                localStorage.setItem('dataKey', JSON.stringify(data.token));
                // navigate(from, { replace: true });
                console.log(JSON.parse(localStorage.getItem('role')))
                if(roles === false)
                navigate('/dashboard')
                else
                navigate('/home')
            }
        })
    }


    
    return (
    <div className={LoginCSS.login}>
        <form>
            <h1 className='mb-4'>Cinema DB</h1>
            {error && <h6 className='badge badge-danger' style={{color:'red'}}>You've Enterd either an incorrect user or a password</h6>}
            <div className='mb-4'>
                <input type='text' placeholder='Email' ref={EmailRef}/>
            </div>
            <div className='mb-4'>
                <input type='password' placeholder='Password' ref={PasswordRef}/>
            </div>
            <button onClick={Signin} type='button'>Sign in</button>
            <Link>Don't Have an Account? Sign Up</Link>
        </form>
    </div>
  )
}

// export const {result} = theresult
export default Signin