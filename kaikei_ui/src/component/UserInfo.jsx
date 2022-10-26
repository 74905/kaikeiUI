import React from 'react'
import styled from "styled-components";

export const UserInfo = ({usersInfo}) => {
  return (
    <table className="data">
		<tr>
			<LoginTh>権限</LoginTh>
			<LoginTh>ユーザID</LoginTh>
			<LoginTh>パスワード</LoginTh>
		</tr>
			{ usersInfo.map((userInfo,index)=>{
                return(
                <tr key={userInfo.docid}>
                <LoginTd>{index === 0 ? "1:入力者" : "2:確認者"  }</LoginTd>
                <LoginTd>{userInfo.userInfo.id}</LoginTd>
                <LoginTd>{userInfo.userInfo.password}</LoginTd>
                </tr>
                )
            })
            }
	</table>
  )
}

const LoginTh = styled.th`
padding: 5px;
color: #ffffff;
background: #888888;
`

const LoginTd = styled.td`
padding: 5px;
color: #ffffff;
background: #888888;
`