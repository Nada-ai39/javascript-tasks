let width=0
let pro=setInterval(function(){

    document.getElementById("progress").innerHTML=`
    <div style="background-color: green; width: ${++width}%;height: 50px;font-size:40px;
    text-align:center;font-style:bold">
    ${width}%</div>`
    if(width==100){
        // width=0
        clearInterval(pro)
    }

},100)



























































// var menu=document.querySelector("select")
// for(i=0;i<menu.options.length;i++){
//     if(menu.options[i].value=="2023")
//         menu.remove(i)
// }
// var menu=document.querySelector("select")
// for(i=0;i<menu.options.length;i++){
//     if(menu.options[i].value=="2024")
//         menu.remove(i)
// }
