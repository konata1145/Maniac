import React, { useState, useEffect } from "react";
import axios from 'axios';

function Login(){
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        console.log('LogIn')
    }
    
    const onClickResign = () => {
        console.log('Resign')
    }

    useEffect(() => {
        //https://backend/login
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    [])

    return(
        <div>
            <h2>로그인</h2>
            <div>
                <label htmlFor = 'input_id'> ID : </label>
                <input type = 'text' name = 'input_id' value={inputId} onChange={handleInputId}/>
            </div>
            <div>
                <label htmlFor = 'input_pw'> PW : </label>
                <input type = 'password' name = 'input_pw' value={inputPw} onChange={handleInputPw}/>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
            </div>
            <div>
                <button type='button' onClick={onClickResign}>회원가입</button>
            </div>
        </div>
    )
} 

export default Login;