import {atom} from "recoil"

//会計報告書か稼働先申請書かを判別するステート
export const isKadousakiInput = atom({
    key: "isKadousakiInput",
    kaikeiInputflg: true 
})