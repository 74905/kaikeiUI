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


export const KaikeiInput = memo(() => {
//登録する会計情報
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
  const userDate = useRecoilValue(grovalUserInfo)
  const [kaikeiMonth, setKaikeiMonth] = useState();
  const [kaikeiday,setKaikeiDay] = useState();
  const [forms,setForms] = useState([createdKaikeiObj(),createdKaikeiObj(),createdKaikeiObj()]);
  const [totalValue,setTotalValue] = useState(0);
  const [selectValues] = useState([...Array(31)].map((_, i) => i + 1));
  const history = useHistory();

  const ref = useRef();

  const scrollButtom = ()=>{
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }

  useEffect(()=>{
    //いつか直す
    const timeObj = new Date();
    setKaikeiMonth(timeObj.getMonth()+1);
    setKaikeiDay(timeObj.getDate());
    scrollButtom();
    console.log(forms)
  },[forms])

  const addform = ()=>{
    if(forms.length === 30){
        window.alert("これ以上追加出来ません")
        return
    }
    setForms([...forms,createdKaikeiObj()])
  }

  const deleteForm = ()=>{
    if(forms.length === 3){
        window.alert("これ以上削除出来ません")
        return
    }
    setForms(forms.filter((form,index)=>(index !== forms.length - 1)))
  }

  const totalAmount = ()=>{
    setTotalValue(forms.reduce((sum,form)=>{return  sum + form.rowAmount},0))
  }

return (
<>
<KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
{ 
    forms.map((addForom)=>{
        console.log(addForom.id)
        return <KinputForm key={addForom.id} addForom={addForom} selectValues={selectValues} userDate={userDate}
        kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} totalAmount={totalAmount}></KinputForm> 
    })
}
<button onClick={()=>{ axios.post('http://localhost:8081/insertKaikei',forms).then(()=> console.log("成功")) }}>登録</button>
<button onClick={()=>{ history.push('/select') }}>戻る</button>
<AddButton onClick={addform}>+</AddButton>
<DeleteButton onClick={deleteForm}>-</DeleteButton>
<div id="bottom-of-list" ref={ref}></div>
</>
  )
})

const AddButton = styled.button`
width: 28px;
height: 28px;
float: right;
margin-top: -2px;
font-size: 18px;
font-weight: bold;
color: #ffffff;
background: #888888;
border-radius: 15px;
outline: none;
`
const DeleteButton = styled.button`
width: 28px;
height: 28px;
float: right;
margin-top: -2px;
font-size: 18px;
font-weight: bold;
color: #ffffff;
background: #888888;
border-radius: 15px;
outline: none;
`