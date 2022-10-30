import React, { Children } from 'react'
import styled from "styled-components";

//フォーム追加ボタン。アラートとフォームのもとになるオブジェクトの追加を行っている
export const InputAddbutton = ({forms,setForms,createdKaikeiObj}) => {
  const addform = ()=>{
    if(forms.length === 30){
        window.alert("これ以上追加出来ません")
        return
    }
    setForms([...forms,createdKaikeiObj()])
  }
  return (
    <AddButton onClick={addform}>+</AddButton>
  )
}
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