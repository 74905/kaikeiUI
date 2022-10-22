import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserInfo } from '../component/UserInfo';
import { LoginForm } from '../component/LoginForm';

export const Login = () => {
const [usersInfo,setUsersInfo] = useState([]);
const [isformEnpty,setIsformEnpty] = useState(false);
useEffect(()=>{
    axios.get('http://localhost:8081/test').then((resolve)=>{ 
        setUsersInfo(resolve.data) 
    }).catch(reject => console.log(reject))
 },[])
  return (
    <div>
        <h1>Login</h1>
    <LoginForm isformEnpty={isformEnpty} setIsformEnpty={setIsformEnpty}></LoginForm>
    <hr />
    <UserInfo usersInfo={usersInfo}></UserInfo>
    </div>
  )
}
