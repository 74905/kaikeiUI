import React from 'react'
import styled from "styled-components";
import { inpuctCheck } from '../atomFunction/inpuCheck'

export const KadousakiForm = ({form,totalAmount}) => {
	const inputMonth = (e)=>{
		if(inpuctCheck(e)){
		  return
		}
	   form.month = e.target.value;
	  }
	const inputDay = (e)=>{
		if(inpuctCheck(e)){
		  return
		}
		form.day = e.target.value
	}
	const inputFee = (e)=>{
		if(inpuctCheck(e)){
		form.fee = 0
		}else {
		form.fee = e.target.value
		}
		totalAmount();
	  }
  return (
    <>
    		<div class="ksMap">
			<KadouInputMonth type="text" name="month" class="month" maxlength="2" onChange={inputMonth} />
			<label>月</label>
			<KadouInputDay type="text" name="day" class="day" maxlength="2"  onChange={inputDay}/>
			<label>日</label>
			<label>摘要</label>
			<KadouInputDesc type="text" name="desc" class="desc" onChange={(e)=>form.desc = e.target.value } />
			<br/>
			<label class="br">経路</label>
			<KadouInput type="text" name="how" class="how" onChange={(e)=>form.how = e.target.value }  />
			<label>金額</label>
			<KadouFeeTaxAomunt type="text" name="fee" class="fee" onChange={inputFee}/>
			<br/>
			<label class="br labelrm">備考</label>
			<KadouArea name="remarks" class="remarks" onChange={(e)=>{form.remarks = e.target.value}}/>
			<hr />
		</div>
    </>
  )
}

const KadouInputMonth = styled.input`
width: 14px;
margin-left: 38px;
`
const KadouInputDay = styled.input`
width: 14px;
`
const KadouInputDesc = styled.input`
width: 90px;
`

const KadouFeeTaxAomunt = styled.input`
width: 40px;
`
const KadouArea = styled.textarea`
width: 208px;
height: 30px;
margin-top: 3px;
`
const KadouInput = styled.input`
width: 120px;
`