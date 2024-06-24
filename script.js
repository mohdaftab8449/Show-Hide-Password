 // select input
 let input=document.querySelector(".pass")
 // select eye
 let eye=document.querySelector("#eye")
 let showPassword=false
 eye.addEventListener("click",()=>{
  if(showPassword==false){
      showPassword=true
      console.log(showPassword)
      eye.textContent="visibility_off"
      input.setAttribute("type","text")
  }
  else{
      showPassword=false
      console.log(showPassword)
      eye.textContent="visibility"
      input.setAttribute("type","password")
  }
 })
