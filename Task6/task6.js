let btn=document.querySelector("button")
let myinput=document.querySelector("input")
btn.onclick=function(){
    let input_type=myinput.getAttribute("type")
    console.log(input_type);
    if (input_type=="password") {

        myinput.setAttribute("type","text")
        btn.innerText="Hide"
        
    }
    else{
        myinput.setAttribute("type","password")
        btn.innerText="Show"
    }
    
}
