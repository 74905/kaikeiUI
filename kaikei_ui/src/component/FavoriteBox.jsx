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



export const FavoriteBox = ({onClose,isOpen,setFavoStartTrain,setEndTrain,favoriteRoutes}) => {
  const decideTrain = (startTrain,endTrain)=>{
    setFavoStartTrain(startTrain)
    setEndTrain(endTrain)
    onClose()
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
                return ( 
                  <Tr key={favoriteRoute.docid}>
                  <Td><KinputStar onClick={()=>decideTrain(favoriteRoute.favoTrain.startTrain,favoriteRoute.favoTrain.endTrain)}>👈★</KinputStar></Td>
                  <Td><Input htmlSize={4} width='auto' defaultValue={favoriteRoute.favoTrain.startTrain}></Input></Td>
                  <Td>～</Td>
                  <Td ><Input htmlSize={4} width='auto' defaultValue={favoriteRoute.favoTrain.endTrain}></Input></Td>
                  </Tr>
        )})}
    </Tbody>
  </Table>
</TableContainer>
        </ModalBody>
        <Center>
        <ModalFooter>
           <Button  colorScheme='BlackAlpha 400' onClick={()=> onClose()}>お気に入り経路更新</Button>
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