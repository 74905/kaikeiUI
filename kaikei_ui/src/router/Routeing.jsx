import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { KaikeiInput } from '../page/KaikeiInput'
import { Login } from '../page/Login'
import { Select } from '../page/Select'
import { ChakraProvider } from '@chakra-ui/react'
import { KadouSaki } from '../page/KadouSaki'

export const Routeing = () => {
  return (
   <Switch>
    <Route exact path="/">
        <Login></Login>
    </Route>
    <Route exact path="/select">
        <Select></Select>
    </Route>
    <Route path="/select/kaikeiInput">
    <ChakraProvider resetCSS={false}>
        <KaikeiInput></KaikeiInput>
    </ChakraProvider>
    </Route>
    <Route>
        <KadouSaki path="/select/kadousaki"></KadouSaki>
    </Route>
   </Switch>
  )
}
