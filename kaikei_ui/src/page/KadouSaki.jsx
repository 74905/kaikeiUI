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
import { RegistterButton } from '../atomComponet/RegistterButton';

export const KadouSaki = () => {
//登録する稼働先経費申請書
const createdkadousakiObj = ()=>{
    const kadousakiObj ={
        id: "",
        month:"",
        day: "",
        desc:"",
        how: "",
        fee:"",
        remarks:""
    }
    kadousakiObj.id = uuidv4();
    return kadousakiObj
}
    const [forms,setForms] = useState([createdkadousakiObj(),createdkadousakiObj(),createdkadousakiObj()])
    const [userDate,kaikeiMonth,kaikeiday,totalValue,ref,{setTotalValue}] = useInputInfo(forms)
    const totalAmount = ()=>{
      setTotalValue(forms.reduce((sum,form)=>{
        return  sum + Number(form.fee)
      },0))
    }
  return (
    <>
    <KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
    {forms.map((form)=>{
        return <KadousakiForm key={form.id} form={form} totalAmount={totalAmount}></KadousakiForm>
    })}
    <InputAddbutton forms={forms} setForms={setForms} createdObj={createdkadousakiObj}></InputAddbutton>
    <InputDeleteButton forms={forms} setForms={setForms}></InputDeleteButton>
    <RegistterButton forms={forms} kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></RegistterButton>
    <BuckButton></BuckButton>
    <div id="bottom-of-list" ref={ref}></div>
    </>
  )
}
