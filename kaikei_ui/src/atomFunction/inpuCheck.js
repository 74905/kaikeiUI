//半角数値以外を空文字に置き換える関数
export const inpuctCheck = (e)=>{
    if(e.target.value.match(/^[0-9]+$/) === null){
        console.log("文字")
        e.target.value =  e.target.value.replace(e.target.value,"")
      return true
      } 
      return false
}
//フォームを回してからの項目があればエラー
// iskaikei 会計報告書か稼働先経費申請書か
export const formsCheck = (forms,iskaikei)=>{
  for(const form of forms){
    //共通でみるチェック
    if(!form.month){
      return false;
    }
    if(!form.day){
      return false;
    }
    if(form.fee === ""){
      return false;
    }
    //会計報告書だけでみるチェック
    if(iskaikei){
      if(!form.startTrain){
        return false;
      }
      if(!form.endTrain){
        return false;
      }
      if(form.tax === ""){
        return false;
      }
    }
    //稼働先経費申請書だけでみるチェック
    else{
      if(!form.how){
        return false;
      }
      if(!form.desc){
        return false;
      }
    }
  }
  return true
}