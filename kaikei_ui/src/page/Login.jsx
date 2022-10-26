import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserInfo } from '../component/UserInfo';
import { LoginForm } from '../component/LoginForm';
import { collection, getDocs } from "firebase/firestore/lite";
import db from '../firebase'

export const Login = () => {
const [usersInfo,setUsersInfo] = useState([]);
const [isformEnpty,setIsformEnpty] = useState(false);
useEffect(()=>{
     getDocs(collection(db, "actusers")).then((querySnapshot)=>{
      console.log(querySnapshot.docs);
      const getUserInofo = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const userObject ={
          docid: doc.id,
          userInfo: doc.data(),
        }
        return userObject
     });
    setUsersInfo(getUserInofo);
    });
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
