import React from 'react'
import { memo } from 'react';
import styled from "styled-components";
import { isKadousakiInput } from '../recoilAtom/isKadousakiInput';
import {useRecoilValue} from 'recoil'
export const KInputInfo = memo(({kaikeiMonth,kaikeiday,userDate,totalValue}) => {
   const kaikeiflg = useRecoilValue(isKadousakiInput)
    return (
 <>
    {kaikeiflg ? <KinputH1><KinputA href="/">Input "会計報告"</KinputA></KinputH1> : <KinputH1><KinputA href="/">Input "稼働先経費申請"</KinputA></KinputH1> }
    <KinputTable>
    <tr>
        <KinputTh><label>氏名</label></KinputTh>
        <KinputTd><input type="text" name="name" id="name" defaultValue={userDate.name} readOnly /></KinputTd>
    </tr>
    <tr>
        <KinputTh><label>件名</label></KinputTh>
        <KinputTd><input key={kaikeiMonth} type="text" name="title" id="title" defaultValue={`${kaikeiMonth}月会計報告書`} /></KinputTd>
    </tr>
    <tr>
        <KinputTh><label>精算期間</label></KinputTh>
        <KinputTd>
            <KinputP name="startMonth" id="startMonth" maxength="2">{kaikeiMonth}月</KinputP>
            <KinputP name="startDay" id="startDay" maxLength="2">1日～</KinputP>
            <KinputP name="endMonth" id="endMonth" maxLength="2">{kaikeiMonth}月</KinputP>
            <KinputP name="endDay" id="endDay" maxLength="2">{kaikeiday}日</KinputP>
        </KinputTd>
    </tr>
    <tr>
        <KinputTh><label>合計金額</label></KinputTh>
        <KinputTd><input key={totalValue} type="text" name="totalAmount" id="totalAmount" defaultValue={totalValue} readOnly /></KinputTd>
    </tr>
</KinputTable>
</>
  )
})
// ここからスタイルシート
const KinputH1 = styled.h1`
font-size: 18pt;
font-weight: bold;
`
const KinputA = styled.a`
color: #888888;
	text-decoration: none;
`
const KinputTh = styled.th`
padding: 5px;
color: #ffffff;
background: #3d7cce;
`
const KinputTd = styled.td`
padding: 5px;
color: #ffffff;
background: #3d7cce;
`
const KinputTable = styled.table`
margin-bottom: 14px;
`
const KinputP = styled.p`
display: inline-block;
`