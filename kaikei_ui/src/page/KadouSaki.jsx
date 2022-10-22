import React, { useCallback, useEffect,useRef,useState } from 'react'
import { KinputForm } from '../component/KinputForm';
import axios from 'axios'
import { KInputInfo } from '../component/KInputInfo';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import {useRecoilValue} from 'recoil'
import {grovalUserInfo } from '../recoilAtom/userAtom'
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import {
  Alert,
  AlertIcon,
  useToast
} from '@chakra-ui/react'
import { BuckButton } from '../atomComponet/BuckButton';

export const KadouSaki = () => {
    const userDate = useRecoilValue(grovalUserInfo)
    const [kaikeiMonth, setKaikeiMonth] = useState();
    const [kaikeiday,setKaikeiDay] = useState();
    const [totalValue,setTotalValue] = useState(0);

    useEffect(()=>{
        //いつか直す
        const timeObj = new Date();
        // recoil管理でいいかも
        setKaikeiMonth(timeObj.getMonth()+1);
        setKaikeiDay(timeObj.getDate());
      },[])
  return (
    <>
    <KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
    <BuckButton></BuckButton>
    </>
  )
}
