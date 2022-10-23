import React from 'react'
import styled from "styled-components";
import {
  useToast
} from '@chakra-ui/react'

//削除ボタン。フォームの削除とそのもとになるオブジェクトの削除。アラートも設定
export const InputDeleteButton = ({forms,setForms}) => {
  const toast = useToast()
  const deleteForm = ()=>{
    if(forms.length === 3){
      toast({
        title: `これ以上削除出来ません`,
        status: 'warning',
        position: 'top',
        isClosable: true,
      })
        return
    }
    setForms(forms.filter((form,index)=>(index !== forms.length - 1)))
  }
  return (
    <DeleteButton onClick={deleteForm}>-</DeleteButton>
  )
}

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