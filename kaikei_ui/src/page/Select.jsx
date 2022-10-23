import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { useSetRecoilState } from 'recoil';
import { isKadousakiInput } from '../recoilAtom/isKadousakiInput';

export const Select = () => {
    const iskaikeiFlg = useSetRecoilState(isKadousakiInput)
    const histroy = useHistory();
    return (
    <>
	<SelectHeader><SelectHeaderA href="/">Select Content</SelectHeaderA></SelectHeader>
		<div  className="input">
			<SelectInput>Input</SelectInput>
			<SelectButton type="submit" name="selected" onClick={()=>{iskaikeiFlg(true); histroy.push("/select/kaikeiInput")}}>会計報告</SelectButton>
			<SelectButton type="submit" name="selected" value="ksinput" onClick={()=>{iskaikeiFlg(false); histroy.push("/select/kadousaki")}}>稼働先経費申請</SelectButton>
		</div>
		<div className="ref">
			<SelectRef>Refer</SelectRef>
			<SelectButton type="submit" name="selected" value="khref">会計報告(参照)</SelectButton>
			<SelectButton type="submit" name="selected" value="ksref">稼働先経費申請(参照)</SelectButton>
		</div>
    </>
  )
}
const SelectHeader = styled.h1({
    fontSize: "18pt",
    fontWeight: "bold",
});
const SelectHeaderA = styled.a({
    color: "#888888",
  textDecoration: "none",
})

const SelectInput = styled.h2({
    backgroundColor: "#3d7cce"
})

const SelectRef = styled.h2({
    backgroundColor: "#00896b",
})

const SelectButton = styled.button`
display: inline-block;
margin-top: 10px;
width: 220px;
height: 34px;
font-size: 13pt;
font-weight: bold;
color: #ffffff;
background: #888888;
border-radius: 3px;
cursor: pointer;
`