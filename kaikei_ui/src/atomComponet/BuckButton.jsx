import React from 'react'
import { useHistory } from 'react-router-dom';


export const BuckButton = () => {
    const history = useHistory();
    return (
    <button onClick={()=>{ history.push('/select') }}>戻る</button>
  )
}
