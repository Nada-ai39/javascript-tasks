let btn=document.querySelector("button")
let myh1=document.querySelector("h1")
let txtinput=document.querySelector("#txt")
let colinput=document.querySelector("#col")

btn.onclick=function(){
    myh1.innerHTML=txtinput.value
    myh1.style.color=colinput.value
 
}







