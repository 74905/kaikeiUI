import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {FavoriteBox} from './FavoriteBox'
import { useDisclosure } from '@chakra-ui/react'
import { inpuctCheck } from '../atomFunction/inpuCheck';
export const KinputForm = ({addForom,selectValues,userDate,kaikeiMonth,kaikeiday,totalAmount,favoriteRoutes}) => {
  //税金合計額出すためにどうしてもステート管理しなければならなかった
  const[rowAmountValue,setRwoAmountValue] = useState("0");
  //区間のステート管理のために必要
  const [favoStartTrain,setFavoStartTrain] = useState("");
  const [favoEndTrain,setEndTrain] = useState("");
  const { isOpen, onToggle, onClose } = useDisclosure()
   const inputMonth = (e)=>{
    if(inpuctCheck(e)){
      return
    }
    addForom.month = e.target.value;
  }
  const inputDay = (e)=>{
    if(inpuctCheck(e)){
      return
    }
    addForom.day = e.target.value
  }
  const inputStartTrain = (e)=>{
    addForom.startTrain = e.target.value
    setFavoStartTrain(addForom.startTrain)
  }
  const inputEndTrain = (e)=>{
    addForom.endTrain = e.target.value
    setEndTrain(addForom.endTrain)
  }
  const inputPay = (e)=>{
    addForom.pay = e.target.value
    console.log(addForom)
  }
  const inputWay = (e)=>{
    addForom.way = e.target.value
  }
  const inputDays = (e)=>{
    addForom.days = e.target.value
  }
  const inputFee = (e)=>{
    if(inpuctCheck(e)){
      addForom.fee = 0;
    }else {
      addForom.fee = e.target.value
    }
    rowAmount();
  }
  const inputTax = (e)=>{
    if(inpuctCheck(e)){
      addForom.tax = 0
    }else {
      addForom.tax = e.target.value
    }
    rowAmount();
  }
  const inputRemarks = (e)=>{
    addForom.remarks = e.target.value
  }
  const rowAmount = ()=>{
    addForom.rowAmount = Number(addForom.tax) + Number(addForom.fee)
    totalAmount()
    return setRwoAmountValue(String(addForom.rowAmount))
  }
  return (
<>
<div  class="khMap">
    <KinputMonth type="text" name="month" class="month" maxlength="2" onChange={inputMonth} maxLength="2"  />
    <label>月</label>
    <KinputMonthDay type="text" name="day" class="day" maxlength="2" onChange={inputDay} maxLength="2"  />
    <label>日</label>
    <br />
    <KinputBr class="br">区間</KinputBr>
    <KinputTrain type="text" name="startTrain" class="startTrain" onChange={inputStartTrain} value={favoStartTrain}/>
    <span>～</span>
    <KinputTrain type="text" name="endTrain" class="endTrain" onChange={inputEndTrain} value={favoEndTrain}/>
    <KinputStar  onClick={onToggle}  class="favStar">★</KinputStar>
    <KinputPay name="pay" class="pay" onChange={inputPay}>
        <option value="ic">ICチップ</option>
        <option value="ticket">切符</option>
    </KinputPay>
    <select name="way" onChange={inputWay}>
        <option value="oneWay" >片道</option>
        <option value="roundTrip">往復</option>
    </select>
    <select name="days" onChange={inputDays}>
    {selectValues.map((selectValue)=>{
       return <option value={selectValue} >{selectValue}</option>
    })
    }
    </select>
    <label>日間</label>
    <br />
    <label>金額</label>
    <KinputFeeTaxAomunt type="text" name="fee" class="fee" onChange={inputFee} />
    <label>税</label>
    <KinputFeeTaxAomunt type="text" name="tax" class="tax" onChange={inputTax}  />
    <label>合計</label>
    <KinputFeeTaxAomunt key={rowAmountValue} defaultValue={rowAmountValue} type="text" name="rowAmount" class="rowAmount" readOnly/>
    <br />
    <KinputRm class="br labelrm">備考</KinputRm>
    <KinputArea name="remarks" class="remarks" onChange={inputRemarks} />
    <KinputHr />
    <FavoriteBox isOpen={isOpen} onClose={onClose} setFavoStartTrain={setFavoStartTrain} setEndTrain={setEndTrain} favoriteRoutes={favoriteRoutes}></FavoriteBox>
 </div>
</>
  )
}

const KinputStar = styled.a`
font-size: 18pt;
line-height: 0;
vertical-align: -0.1em;
color: #FFA500;
text-decoration: none;
cursor: pointer;
`
const KinputMonth = styled.input`
width: 14px;
margin-left: 38px;
`
const KinputPay = styled.select`
margin-left: 38px;
`
const KinputFeeTaxAomunt = styled.input`
width: 40px;
`
const KinputTrain = styled.input`
width: 80px;
`
const KinputRm = styled.label`
vertical-align: top;
`
const KinputArea = styled.textarea`
width: 208px;
height: 30px;
margin-top: 3px;
`
const KinputHr = styled.hr`
border-color: #3d7cce;
`
const KinputMonthDay = styled.input`
width: 14px;
`
const KinputBr = styled.label`
content: "\A";
white-space: pre;
`