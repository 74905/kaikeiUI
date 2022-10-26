import React, { useCallback, useEffect,useRef,useState } from 'react'
import { KinputForm } from '../component/KinputForm';
import axios from 'axios'
import { KInputInfo } from '../component/KInputInfo';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import { BuckButton } from '../atomComponet/BuckButton';
import { useInputInfo } from '../atomFunction/useInputInfo';
import { InputAddbutton } from '../atomComponet/InputAddbutton';
import { InputDeleteButton } from '../atomComponet/InputDeleteButton';
import {KadousakiForm} from '../component/KadousakiForm'

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

    const totalAmount = ()=>{
      setTotalValue(forms.reduce((sum,form)=>{
        return  sum + form.rowAmount
      },0))
    }
  return (
    <>
    <KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
    {forms.map((form)=>{
        return <KadousakiForm key={form.id}addForom={form} userDate={userDate}
        kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} totalAmount={totalAmount}></KadousakiForm>
    })}
    <InputAddbutton forms={forms} setForms={setForms} createdKaikeiObj={createdKaikeiObj}></InputAddbutton>
    <InputDeleteButton forms={forms} setForms={setForms}></InputDeleteButton>
    <BuckButton></BuckButton>
    </>
  )
}
