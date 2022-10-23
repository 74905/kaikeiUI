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
import { useInputInfo } from '../atomFunction/useInputInfo';
import { InputAddbutton } from '../atomComponet/InputAddbutton';

export const KadouSaki = () => {
//登録する稼働先経費申請書
const createdKaikeiObj = ()=>{
    const kaikeiObj ={
        id: "",
        moth:"",
        day: "",
        startTrain: "",
        endTrain: "",
        tool: "",
        way: "",
        days: "",
        pay: "",
        tax: "",
        rowAmount: 0,
        remarks:""
    }
    kaikeiObj.id = uuidv4();
    return kaikeiObj
}
    const [forms,setForms] = useState([createdKaikeiObj(),createdKaikeiObj(),createdKaikeiObj()])
    const [userDate,kaikeiMonth,kaikeiday,totalValue,{setTotalValue}] = useInputInfo(forms)
  return (
    <>
    <KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
    {forms.map((form)=>{
        return <p>{form.id}</p>
    })}
    <InputAddbutton forms={forms} setForms={setForms} createdKaikeiObj={createdKaikeiObj}></InputAddbutton>
    <BuckButton></BuckButton>
    </>
  )
}
