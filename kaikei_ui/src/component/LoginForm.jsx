import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {grovalUserInfo } from '../recoilAtom/userAtom'
import styled from "styled-components";
export const LoginForm = ({isformEnpty,setIsformEnpty}) => {
const setUserDate = useSetRecoilState(grovalUserInfo)
const [userId,setUserId ] = useState("");
const [userPassword, setUserPassword] = useState("");
const history = useHistory();
const inputUserId = (event)=> setUserId(event.target.value);
const inputPassword = (event)=> setUserPassword(event.target.value);
const loginAction = () =>{
        if(userId.length === 0|| userPassword === 0 ){
            setIsformEnpty(true)
            return
        }
        axios.post('http://localhost:8081/loginInfo',{
          id: userId,
          password: userPassword  
        }).then((resolve)=>{
            console.log(resolve)
            setUserDate(resolve.data)
            history.push("/select")
        }) 
    }
  return (
    <>
    {isformEnpty && <p>入力してください</p>}
    <table>
        <tr>
            <LoginTh><label for="id">ユーザID</label></LoginTh>
            <LoginTd><input type="text" name="userId" onChange={ inputUserId}/></LoginTd>
        </tr>
        <tr>
            <LoginTh><label for="password">パスワード</label></LoginTh>
            <LoginTd><input type="password" name="password" onChange={inputPassword}/></LoginTd>
        </tr>
    </table>
    <div class="buttonArea">
        <button type="submit" onClick={loginAction} >ログイン</button>
    </div>
    </>
  )
}
const LoginTh = styled.th`
padding: 5px;
color: #ffffff;
background: #888888;
`

const LoginTd = styled.td`
padding: 5px;
color: #ffffff;
background: #888888;
`