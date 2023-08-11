import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';


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
    <div>
        <div>
            <label>Email</label>
            <input type='email' ref={EmailRef}/>
            <label>Password</label>
            <input type='password' ref={PasswordRef}/>
            <button onClick={Signin}>Sign in</button>
        </div>
    </div>
  )
}

// export const {result} = theresult
export default Signin