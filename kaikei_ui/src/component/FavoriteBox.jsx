import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Input
} from "@chakra-ui/react"
import styled from "styled-components";
import { useEffect } from 'react';
import axios from 'axios'
import {useRecoilValue} from 'recoil'
import {grovalUserInfo } from '../recoilAtom/userAtom'
import { useState } from 'react';
import db from '../firebase'
import { collection, setDoc, doc,query, where, getDoc } from "firebase/firestore/lite";

export const FavoriteBox = ({onClose,isOpen,setFavoStartTrain,setEndTrain,favoriteRoutes,setFavoriteRoutes,userDate}) => {
  const decideTrain = (startTrain,endTrain)=>{
    setFavoStartTrain(startTrain)
    setEndTrain(endTrain)
    onClose()
  }
  const changeStartTrain = (docid,e) =>{
   const newFavoriteRoute = favoriteRoutes.map((favoriteRoute)=>{
      if(favoriteRoute.docid === docid){
        favoriteRoute.startTrain = e.target.value
      }
      return favoriteRoute
    })
    setFavoriteRoutes(newFavoriteRoute)
  }
  const changeEndTrain = (docid,e) =>{
    const newFavoriteRoute = favoriteRoutes.map((favoriteRoute)=>{
       if(favoriteRoute.docid === docid){
        favoriteRoute.endTrain = e.target.value
       }
       return favoriteRoute
     })
     setFavoriteRoutes(newFavoriteRoute)
   }
   //firebaseに更新したお気に入り経路登録
   //更新だけで使える状態。docを増やす場合はdocidを最初からフィールドに増やす必要性がある
   const updateTrain = ()=>{
    favoriteRoutes.forEach((favoriteRoute)=>{
      console.log(favoriteRoute)
      setDoc(doc(db,"actusers",userDate.docid,"favoriteTraions",favoriteRoute.docid),favoriteRoute).then(()=>{
        onClose()
      })
    })
   }
  return (
    <>
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>お気に入り経路</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
  <TableContainer>
  <Table size='sm'>
    <Tbody>
        {favoriteRoutes.map((favoriteRoute)=>{
          console.log(favoriteRoute.startTrain)
                return ( 
                  <Tr key={favoriteRoute.docid}>
                  <Td><KinputStar onClick={()=>decideTrain(favoriteRoute.startTrain,favoriteRoute.endTrain)}>👈★</KinputStar></Td>
                  <Td><Input htmlSize={4} width='auto' onChange={(e)=>{changeStartTrain(favoriteRoute.docid,e)}} defaultValue={favoriteRoute.startTrain}></Input></Td>
                  <Td>～</Td>
                  <Td ><Input htmlSize={4} width='auto' onChange={(e)=>{changeEndTrain(favoriteRoute.docid,e)}} defaultValue={favoriteRoute.endTrain}></Input></Td>
                  </Tr>
        )})}
    </Tbody>
  </Table>
</TableContainer>
        </ModalBody>
        <Center>
        <ModalFooter>
           <Button  colorScheme='BlackAlpha 400'  onClick={updateTrain}>お気に入り経路更新</Button>
        </ModalFooter>
        </Center>
      </ModalContent>
    </Modal>
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