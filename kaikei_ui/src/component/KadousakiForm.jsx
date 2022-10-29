import React from 'react'
import styled from "styled-components";

export const KadousakiForm = () => {
  return (
    <>
    		<div class="ksMap">
			<KadouInputMonth type="text" name="month" class="month" maxlength="2" />
			<label>月</label>
			<KadouInputDay type="text" name="day" class="day" maxlength="2" />
			<label>日</label>
			<label>摘要</label>
			<KadouInputDesc type="text" name="desc" class="desc" />
			<br/>
			<label class="br">経路</label>
			<KadouInput type="text" name="how" class="how"  />
			<label>金額</label>
			<KadouFeeTaxAomunt type="text" name="fee" class="fee"  onblur="calcTotalAmount();"/>
			<br/>
			<label class="br labelrm">備考</label>
			<KadouArea name="remarks" class="remarks"/>
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