import {atom} from "recoil"
import { recoilPersist } from 'recoil-persist'

//ローカルストレージ（現状）に保存する関数
const { persistAtom } = recoilPersist(
    { 
    key: 'recoil-persist', // configuration stay the same too
    storage: localStorage}
)

// ユーザー情報を保持するステート
export const grovalUserInfo = atom({
    key: "grovalUserInfo",
    default: {},
    effects_UNSTABLE: [persistAtom]
})