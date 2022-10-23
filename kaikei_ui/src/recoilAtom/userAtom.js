import {atom} from "recoil"

// ユーザー情報を保持するステート
export const grovalUserInfo = atom({
    key: "grovalUserInfo",
    default: {}
})