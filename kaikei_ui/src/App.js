import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routeing } from './router/Routeing';
import {RecoilRoot} from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routeing></Routeing>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
