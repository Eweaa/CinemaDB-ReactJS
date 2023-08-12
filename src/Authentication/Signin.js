import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import LoginCSS from './Singin.module.css'
import { Link } from 'react-router-dom';


const Signin = () => {
    
    const navigate = useNavigate();
    const EmailRef = useRef();
    const PasswordRef = useRef();

    const Signin = async () => {
        axios.get(`https://localhost:7250/api/Security/Login?userName=${EmailRef.current.value}&password=${PasswordRef.current.value}`).then(res => {
            console.log(res.data)
            // return result = res.data
            const data = res.data
            localStorage.setItem('role', JSON.stringify(data.item1))
            localStorage.setItem('dataKey', JSON.stringify(data.item2))
            navigate('/')
        })
    }


    
    return (
    <div className={LoginCSS.login}>
        <form>
            <h1 className='mb-4'>Cinema DB</h1>
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