import React from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import db from '../firebase'
import {
  useToast
} from '@chakra-ui/react'
import {formsCheck} from '../atomFunction/inpuCheck'
import { isKadousakiInput } from '../recoilAtom/isKadousakiInput'
import {useRecoilValue} from 'recoil'
export const RegistterButton = ({forms,kaikeiMonth,kaikeiday,userDate,totalValue}) => {
  const toast = useToast()
  const isKaikei= useRecoilValue(isKadousakiInput)
  const registerKaikeiInput = () =>{
    if(formsCheck(forms,isKaikei) === false){
      console.log(forms)
      toast({
        title: `必須項目が入力されていません`,
        status: 'error',
        position: 'top-left',
        isClosable: true,
      })
      return
    }
    const userInfo = {
      userId: userDate.id,
      kaikeiMonth: kaikeiMonth,
      startDay: 1,
      endDay: kaikeiday,
      totalValue:totalValue,
      userForms: forms
    }
    const collectionDoc = isKaikei ? "kaikeiHokoku" : "kadouSaki"
    addDoc(collection(db,collectionDoc),userInfo).then((doc)=>{
      toast({
        title: `登録が完了しました`,
        status: 'success',
        position: 'top-left',
        isClosable: true,
      })
    })
  }
  return (
    <button onClick={registerKaikeiInput}>登録</button>
  )
}
