import React, { useCallback, useEffect,useRef,useState } from 'react'
import {useRecoilValue} from 'recoil'
import {grovalUserInfo } from '../recoilAtom/userAtom'

export const useInputInfo = (forms)=>{
    const timeObj = new Date();
    const userDate = useRecoilValue(grovalUserInfo)
    const [kaikeiMonth] = useState(timeObj.getMonth()+1);
    const [kaikeiday] = useState(timeObj.getDate());
    const [totalValue,setTotalValue] = useState(0);
    useEffect(()=>{
        console.log("増えました")
      },[forms])
    return [userDate,kaikeiMonth,kaikeiday,totalValue,{setTotalValue}]
}