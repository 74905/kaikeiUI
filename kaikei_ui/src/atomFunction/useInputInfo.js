import React, { useCallback, useEffect,useRef,useState } from 'react'
import {useRecoilValue} from 'recoil'
import {grovalUserInfo } from '../recoilAtom/userAtom'

//各申請書のステート関係をまとめている
export const useInputInfo = (forms)=>{
    const timeObj = new Date();
    const userDate = useRecoilValue(grovalUserInfo)
    const [kaikeiMonth] = useState(timeObj.getMonth()+1);
    const [kaikeiday] = useState(timeObj.getDate());
    const [totalValue,setTotalValue] = useState(0);
    return [userDate,kaikeiMonth,kaikeiday,totalValue,{setTotalValue}]
}