import React from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import db from '../firebase'

export const RegistterButton = ({forms,kaikeiMonth,kaikeiday,userDate,totalValue}) => {
  const registerKaikeiInput = () =>{
    const userInfo = {
      userId: userDate.id,
      kaikeiMonth: kaikeiMonth,
      startDay: 1,
      endDay: kaikeiday,
      totalValue:totalValue,
      userForms: forms
    }
    addDoc(collection(db,"kaikeiHokoku"),userInfo).then((doc)=> console.log(doc))
  }
  return (
    <button onClick={registerKaikeiInput}>登録</button>
  )
}
