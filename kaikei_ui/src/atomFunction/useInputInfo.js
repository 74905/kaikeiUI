import React, { useCallback, useEffect,useRef,useState, } from 'react'
import {useRecoilValue} from 'recoil'
import {grovalUserInfo } from '../recoilAtom/userAtom'

//各申請書のステート関係をまとめている
export const useInputInfo = (forms)=>{
    const timeObj = new Date();
    const userDate = useRecoilValue(grovalUserInfo)
    const [kaikeiMonth] = useState(timeObj.getMonth()+1);
    const [kaikeiday] = useState(timeObj.getDate());
    const [totalValue,setTotalValue] = useState(0);
    const ref = useRef();
    //フォームが増えたときにスクロールするようにマウント時にじっこう
    useEffect(()=>{
      scrollButtom(ref)
    },[forms])
    return [userDate,kaikeiMonth,kaikeiday,totalValue,ref,{setTotalValue}]
}
const scrollButtom = (ref)=>{
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "end"
  });
}