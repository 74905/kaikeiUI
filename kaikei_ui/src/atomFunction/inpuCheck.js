export const inpuctCheck = (e)=>{
    if(e.target.value.match(/^[0-9]+$/) === null){
        console.log("文字")
        e.target.value =  e.target.value.replace(e.target.value,"")
      return true
      } 
      return false
}