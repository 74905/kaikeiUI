import React, { Suspense, useCallback, useEffect,useRef,useState } from 'react'
import { KinputForm } from '../component/KinputForm';
import axios from 'axios'
import { KInputInfo } from '../component/KInputInfo';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import { BuckButton } from '../atomComponet/BuckButton';
import { useInputInfo } from '../atomFunction/useInputInfo';
import { InputAddbutton } from '../atomComponet/InputAddbutton';
import { InputDeleteButton } from '../atomComponet/InputDeleteButton';
import { useHistory } from 'react-router-dom';

export const KaikeiInput = memo(() => {
 const history = useHistory()
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
const [forms,setForms] = useState([createdKaikeiObj(),createdKaikeiObj(),createdKaikeiObj()]);
const [userDate,kaikeiMonth,kaikeiday,totalValue,{setTotalValue}] = useInputInfo(forms)
const [selectValues] = useState([...Array(31)].map((_, i) => i + 1));


  const ref = useRef();

  const scrollButtom = ()=>{
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }

  useEffect(()=>{
    scrollButtom();
    console.log(forms)
  },[forms])

  const totalAmount = ()=>{
    setTotalValue(forms.reduce((sum,form)=>{
      return  sum + form.rowAmount
    },0))
  }

return (
<>
<Suspense fallback={
<>
<p>エラーが発生しました。トップページに戻ってください</p>
<button onClick={()=> history.push("/") }>トップページに戻る</button>
</>
}>
<KInputInfo kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} userDate={userDate} totalValue={totalValue}></KInputInfo>
{ 
    forms.map((addForom)=>{
        return <KinputForm key={addForom.id} addForom={addForom} selectValues={selectValues} userDate={userDate}
        kaikeiMonth={kaikeiMonth} kaikeiday={kaikeiday} totalAmount={totalAmount}></KinputForm> 
    })
}
<button onClick={()=>{ axios.post('http://localhost:8081/insertKaikei',forms).then(()=> console.log("成功")) }}>登録</button>
<BuckButton></BuckButton>
<InputAddbutton forms={forms} setForms={setForms} createdKaikeiObj={createdKaikeiObj}>+</InputAddbutton>
<InputDeleteButton forms={forms} setForms={setForms}></InputDeleteButton>
<div id="bottom-of-list" ref={ref}></div>
</Suspense>
</>
  )
})
